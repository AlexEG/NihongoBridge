import FolderCard from "./FolderCard/_FolderCard";
import WordCard from "./WordCard/_WordCard";

type FolderData = {
  metadata: {
    number_of_words: number;
    folder_name: string;
    is_installed: boolean;
  };
  words: {
    [key: string]: WordInfo;
  };
};
type WordInfo = {
  soundFile: string;
  definition: string;
  ipa_phonetic_transcription_us: string;
  ipa_phonemic_transcription_us: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
};

type FolderMetadata = {
  number_of_words: number;
  folder_name: string;
  is_installed: boolean;
};

type VocabularyShopFoldersMetadata = {
  [folderKey: string]: FolderMetadata;
};

export default function English() {
  const English = document.createElement("div");
  const className =
    "relative flex flex-wrap justify-center gap-x-4 gap-y-8 max-w-5xl mx-auto py-16 selection:text-white border0";
  English.setAttribute("class", className);

  const className2 = "flex flex-wrap justify-center gap-x-4 gap-y-8 border0";
  const folderCardsContainer = document.createElement("div");
  folderCardsContainer.setAttribute("class", className2);
  folderCardsContainer.setAttribute(
    "id",
    "vocabulary-shop--folder-cards-container"
  );

  function renderFolders(data: VocabularyShopFoldersMetadata) {
    for (const [filename, folderMetadata] of Object.entries(data)) {
      const folderName = folderMetadata.folder_name;
      const wordsNum = folderMetadata.number_of_words;
      const isFolderInstalled = folderMetadata.is_installed;

      folderCardsContainer.append(
        FolderCard(folderName, wordsNum, isFolderInstalled)
      );
    }
  }

  window.api
    .readJsonFile("vocabulary-shop/folders_metadata.json")
    .then((data: VocabularyShopFoldersMetadata) => {
      renderFolders(data);
      // console.log("VocabularyShop Folders metadata:", data);
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  // type AllFoldersData = {
  //   [filename: string]: FolderData;
  // };

  // function renderFolders(data: AllFoldersData) {
  //   for (const [filename, folderData] of Object.entries(data)) {
  //     const metadate = folderData.metadata;
  //     const wordsNum = metadate.number_of_words;
  //     const folderName = metadate.folder_name;
  //     const isFolderInstalled = metadate.is_installed;

  //     const words = folderData.words;
  //     console.log("Words:", words);
  //     folderCardsContainer.append(
  //       FolderCard(folderName, wordsNum, isFolderInstalled)
  //     );
  //   }
  // }

  // window.api
  //   .readJsonFiles("vocabulary-shop/folders")
  //   .then((data: AllFoldersData) => {
  //     // console.log(data);
  //     renderFolders(data);
  //   })
  //   .catch((error) => console.error(error));

  English.append(folderCardsContainer);
  return English;
}

//TODO use less addEventListener
