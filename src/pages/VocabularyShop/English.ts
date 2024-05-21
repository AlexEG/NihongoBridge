import CloseFolderView from "./FolderCard/CloseFolderView";
import FolderCard from "./FolderCard/_FolderCard";

type FoldersMetadata = {
  [key: string]: {
    folder_title: string;
    words_count: number;
  };
};

export default function English() {
  const English = document.createElement("div");
  const className =
    "relative max-w-5xl mx-auto py-16 selection:text-white border0";
  English.setAttribute("class", className);
  English.setAttribute("id", "vocabulary-shop--english");

  const className2 = "flex flex-wrap justify-center gap-x-4 gap-y-8 border0";
  const folderCardsContainer = document.createElement("div");
  folderCardsContainer.setAttribute("class", className2);
  folderCardsContainer.setAttribute(
    "id",
    "vocabulary-shop--folder-cards-container"
  );

  function renderFolderCards(data: FoldersMetadata) {
    for (const [folderFileName, folderMetadata] of Object.entries(data)) {
      const folderTitle = folderMetadata.folder_title;
      const wordsCount = folderMetadata.words_count;
      const isFolderInstalled = false;

      folderCardsContainer.append(
        FolderCard(folderTitle, wordsCount, isFolderInstalled, folderFileName)
      );
    }
  }

  // ******************** //
  // window.api
  //   .readJsonFile("vocabulary-shop/folders_metadata.json")
  //   .then((data: VocabularyShopFoldersMetadata) => {
  //     renderFolderCards(data);
  //     // console.log("VocabularyShop Folders metadata:", data);
  //   })
  //   .catch((error: Error) => {
  //     console.error("Failed to read the JSON file:", error);
  //   });
  // ******************** //

  window.api
    .fetchMetadata(
      "https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/metadata/all_folders_metadata.json"
    )
    .then((folders_metadata: FoldersMetadata) => {
      console.log(
        "From GitHub (english/metadata/all_folders_metadata.json)",
        folders_metadata
      );

      renderFolderCards(folders_metadata);
    })
    .catch((error) => {
      console.error("Error fetching metadata:", error);
    });

  English.append(CloseFolderView(), folderCardsContainer);
  return English;
}

//TODO use less addEventListener
