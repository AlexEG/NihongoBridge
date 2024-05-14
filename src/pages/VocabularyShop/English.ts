import CloseFolderView from "./FolderCard/CloseFolderView";
import FolderCard from "./FolderCard/_FolderCard";

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

  function renderFolderCards(data: VocabularyShopFoldersMetadata) {
    for (const [folderFileName, folderMetadata] of Object.entries(data)) {
      const folderName = folderMetadata.folder_name;
      const wordsNum = folderMetadata.number_of_words;
      const isFolderInstalled = folderMetadata.is_installed;

      folderCardsContainer.append(
        FolderCard(folderName, wordsNum, isFolderInstalled, folderFileName)
      );
    }
  }

  window.api
    .readJsonFile("vocabulary-shop/folders_metadata.json")
    .then((data: VocabularyShopFoldersMetadata) => {
      renderFolderCards(data);
      // console.log("VocabularyShop Folders metadata:", data);
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  English.append(CloseFolderView(), folderCardsContainer);
  return English;
}

//TODO use less addEventListener
