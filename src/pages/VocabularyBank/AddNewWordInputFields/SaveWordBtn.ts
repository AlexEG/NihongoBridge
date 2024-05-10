export default function SaveWordBtn() {
  const saveWordBtn = document.createElement("button");
  saveWordBtn.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--save-word-btn"
  );
  const className =
    "px-2 py-1 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors hover:text-[hsl(212,12%,80%)] mx-auto text-sm mt-10";

  saveWordBtn.setAttribute("class", className);
  saveWordBtn.textContent = "Add To Vocabulary Bank";

  saveWordBtn.addEventListener("click", addNewWordToVocabularyBank);
  return saveWordBtn;
}

function addNewWordToVocabularyBank() {
  const wordInputField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--word > input"
  ) as HTMLInputElement;
  const syllableDivisionField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--syllable-division > input"
  ) as HTMLInputElement;
  const definitionField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--definition > input"
  ) as HTMLInputElement;
  const exampleField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--example > input"
  ) as HTMLInputElement;
  const ipaUSField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--ipa-us > input"
  ) as HTMLInputElement;
  const similarWordsField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--similar-words > input"
  ) as HTMLInputElement;
  const tagsField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--tags > input"
  ) as HTMLInputElement;

  window.api.addNewWordToVocabularyBank(
    wordInputField.value || "???",
    syllableDivisionField.value || "???",
    definitionField.value || "???",
    exampleField.value || "???",
    ipaUSField.value || "???",
    similarWordsField.value || "???",
    tagsField.value || "???"
  );

  closeAddNewWordFieldsPopup();
  saveWordSoundFile();
}

function closeAddNewWordFieldsPopup() {
  const addNewWordFieldsPopup = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields"
  ) as HTMLElement;

  addNewWordFieldsPopup.dataset.isOpen = "false";
  addNewWordFieldsPopup.classList.replace("flex", "hidden");

  const inputs = Array.from(addNewWordFieldsPopup.querySelectorAll("input"));
  for (const input of inputs) input.value = "";
}

function saveWordSoundFile() {
  const wordInputField = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--word > input"
  ) as HTMLInputElement;
  const fileName = wordInputField.getAttribute("value");
  // const fileName = "testtest";

  const soundFileDragDropContainer = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields--sound-file-drag-and-drop-zone"
  ) as HTMLDivElement;
  const droppedFilePath = soundFileDragDropContainer.dataset.droppedFilePath;

  // console.log("droppedFilePath", droppedFilePath);
  // console.log("soundFileDragDropContainer", soundFileDragDropContainer);
  // console.log("wordInputField", wordInputField);
  // console.log("wordInputField v", wordInputField.value);
  // console.log("fileName", fileName);

  if (droppedFilePath && fileName) {
    window.api
      .processFile(droppedFilePath, fileName)
      .then((response) => {
        console.log("File successfully processed!", response.message);
        // Update the UI to show success message
      })
      .catch((error) => {
        console.error("Error processing file:", error);
        // Update the UI to show error message
      });
  }
}
