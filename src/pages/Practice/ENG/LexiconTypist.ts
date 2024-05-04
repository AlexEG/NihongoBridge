import CustomizableQuestionNavigator from "../CustomizableQuestionNavigator";
interface VocabularyData {
  metadate: { number_of_words: number };
  words: WordInfo[];
}

interface WordInfo {
  soundFile: string;
  word: string;
  definition: string;
  ipa_us: string;
  ipa_uk: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
  difficultyLevel: number;
}

export default function LexiconTypist() {
  const LexiconTypist = document.createElement("div");
  const className = "relative flex flex-col justify-evenly  border0";
  LexiconTypist.setAttribute("class", className);

  // telescope

  // next previous buttons

  const nextBtn = document.createElement("button");
  const className7 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  nextBtn.setAttribute("class", className7);
  nextBtn.innerText = "Next";

  const previousBtn = document.createElement("button");
  const className8 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  previousBtn.setAttribute("class", className8);
  previousBtn.innerText = "Previous";

  const nextPreviousBtnsContainer = document.createElement("div");
  const className9 = "mx-auto flex justify-between gap-x-2 mt-20 border0 w-1/2";
  nextPreviousBtnsContainer.setAttribute("class", className9);
  nextPreviousBtnsContainer.append(previousBtn, nextBtn);

  const dataPromise = window.api.readJsonFile("vocabulary-bank/English.json");

  dataPromise
    .then((data: VocabularyData) => {
      // get a random word for testing
      const randomWord =
        data.words[Math.floor(Math.random() * data.words.length + 1)];
      console.log("randomWord", randomWord);
      LexiconTypist.append(
        CustomizableQuestionNavigator(),
        definitionContainer(randomWord.definition),
        inputSubmitBtnContainer(randomWord.word),
        nextPreviousBtnsContainer
      );
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  return LexiconTypist;
}

function definitionContainer(text: string) {
  //* definition

  const definitionContainer = document.createElement("div");
  const className2 = "pt-10";
  definitionContainer.setAttribute("class", className2);

  const definition = document.createElement("h1");
  const className3 =
    "text-white/90 font-semibold text-xl text-center max-w-4xl mx-auto";
  definition.setAttribute("class", className3);

  definition.innerText = text;

  definitionContainer.append(definition);
  return definitionContainer;
}

function inputSubmitBtnContainer(correctWord: string) {
  //* input
  const input = document.createElement("input");
  const className4 =
    "text-[hsl(212,12%,80%)] border border-[hsl(216,28%,20%)] p-4 text-lg font-semibold bg-[hsl(216,28%,7%)] w-96 ";

  input.setAttribute("type", "text");
  input.setAttribute("class", className4);
  input.setAttribute("placeholder", "cat, water, etc...");

  //* submit btn
  const submitBtn = document.createElement("button");
  const className5 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  submitBtn.setAttribute("class", className5);
  submitBtn.innerText = "submit";

  //* input + submitBtn container
  const inputSubmitBtnContainer = document.createElement("div");
  const className6 = " mx-auto flex justify-center gap-x-2 mt-20";
  inputSubmitBtnContainer.setAttribute("class", className6);
  inputSubmitBtnContainer.append(input, submitBtn);
  submitBtn.addEventListener("click", submitClickHandler);

  function submitClickHandler() {
    if (input.value.toLowerCase() === correctWord.toLowerCase())
      console.log("correct");
    else console.log("wrong");
  }
  return inputSubmitBtnContainer;
}
