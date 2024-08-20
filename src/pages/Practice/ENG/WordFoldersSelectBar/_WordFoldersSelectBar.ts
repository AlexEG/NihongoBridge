import FolderCard from "./FolderCard";

type FoldersMetadata = {
  [key: string]: {
    folder_title: string;
    words_count: number;
  };
};

export default function WordFoldersSelectBar() {
  const folderCardsContainerBar = document.createElement("div");
  const className =
    "border0 h-44 p-4 flex flex-col flex-wrap gap-x-2 overflow-y-hidden overflow-x-auto";
  folderCardsContainerBar.setAttribute("class", className);
  // folderCardsContainerBar.setAttribute("id", "word-folders-select-bar");
  folderCardsContainerBar.dataset.selectedFolders = "[]";

  function renderFolderCards(data: FoldersMetadata) {
    for (const [folderFileName, folderMetadata] of Object.entries(data)) {
      const folderTitle = folderMetadata.folder_title;
      const wordsCount = folderMetadata.words_count;
      const isFolderCustom = false;

      folderCardsContainerBar.append(
        FolderCard(folderTitle, wordsCount, isFolderCustom, folderFileName)
      );
    }
  }

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

  // ******** //

  return folderCardsContainerBar;
}
