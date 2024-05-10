import CancelBtn from "./CancelBtn";
import SaveWordBtn from "./SaveWordBtn";
import Soundfile from "./Soundfile";

export default function AddNewWordInputFields() {
  const container = document.createElement("div");
  const className =
    "p-4 bg-[hsl(218,80%,2%)] border-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-4 hidden";
  container.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields"
  );
  container.setAttribute("class", className);
  container.dataset.isOpen = "false";
  // ---------------

  const inputFields = document.createElement("div");

  const wordInputField = inputField("Word", "Important");
  const syllableDivisionField = inputField("Syllable Division", "Im·por·tant");
  const definitionField = inputField(
    "Definition",
    "of great significance or value"
  );
  const exampleField = inputField(
    "Example",
    "Important habitats for wildlife."
  );
  const ipaUSField = inputField("IPA US", "[ɪmˈpɔːt(ə)nt]");
  const similarWordsField = inputField(
    "Similar Words",
    "main, chief, principal"
  );
  const tagsField = inputField("Tags", "significant, valuable, crucial");

  wordInputField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--word"
  );
  syllableDivisionField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--syllable-division"
  );
  definitionField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--definition"
  );
  exampleField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--example"
  );
  ipaUSField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--ipa-us"
  );
  similarWordsField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--similar-words"
  );
  tagsField.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--tags"
  );

  inputFields.append(
    wordInputField,
    definitionField,
    exampleField,
    syllableDivisionField,
    ipaUSField,
    similarWordsField,
    tagsField
  );

  const soundfileAndSaveWordWrapper = document.createElement("div");
  soundfileAndSaveWordWrapper.setAttribute("class", "flex flex-col");
  soundfileAndSaveWordWrapper.append(Soundfile(), SaveWordBtn(), CancelBtn());

  container.append(inputFields, soundfileAndSaveWordWrapper);
  return container;
}

function inputField(text: string, placeholder: string) {
  const inputField = document.createElement("div");
  inputField.setAttribute("class", "flex items-center mb-1");
  const wordSpan = document.createElement("span");
  wordSpan.setAttribute(
    "class",
    "text-white/90 px-2 text-sm whitespace-nowrap"
  );
  wordSpan.textContent = text;
  const wordInput = document.createElement("input");
  const className3 =
    "text-[hsl(212,12%,80%)] border border-[hsl(216,28%,20%)] p-2 bg-[hsl(216,28%,7%)] w-96 ml-auto";
  wordInput.setAttribute("class", className3);
  wordInput.setAttribute("type", "text");
  wordInput.setAttribute("value", "");
  wordInput.setAttribute("placeholder", placeholder);
  wordInput.onchange = () => {
    wordInput.setAttribute("value", wordInput.value);
  };
  inputField.append(wordSpan, wordInput);

  return inputField;
}
