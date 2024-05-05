import CustomizableQuestionNavigator from "../../CustomizableQuestionNavigator";
import Definition from "./Definition";
import Input from "./Input";
import SubmitBtn from "./SubmintBtn";
import getNextQuestion from "./getNextQuestion";
import submitAndValidationClickHandler from "./submitAndValidationClickHandler";

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

export default function LexiconTypist(wordsArr: WordInfo[]) {
  const LexiconTypist = document.createElement("div");
  const className = "relative flex flex-col justify-evenly border";
  LexiconTypist.setAttribute("class", className);
  LexiconTypist.setAttribute("id", "eng--lexicon-typist");
  LexiconTypist.dataset.correctAnswer = "";

  const questionOrderType = "random";
  const firstQuestion = getNextQuestion(questionOrderType, wordsArr);
  LexiconTypist.dataset.correctAnswer = firstQuestion.word;
  // console.log(firstQuestion);

  const input = Input();
  const submitBtn = SubmitBtn();

  //* input + submitBtn container + correct + wrong
  const inputSubmitBtnContainer = document.createElement("div");
  const className6 = "mx-auto flex justify-center gap-x-2 mt-20 border0";
  inputSubmitBtnContainer.setAttribute("class", className6);
  inputSubmitBtnContainer.append(input, submitBtn);

  submitBtn.addEventListener("click", () =>
    submitAndValidationClickHandler(input.value, questionOrderType, wordsArr)
  );

  LexiconTypist.append(
    CustomizableQuestionNavigator(),
    Definition(firstQuestion.definition),
    inputSubmitBtnContainer
  );

  return LexiconTypist;
}

/*



function indicatorCorrectWrong() {
  const container = document.createElement("div");
  const className = "h-7 mb-1";
  container.setAttribute("class", className);

  container.append(wrongAnswer());

  return container;
}




function correctAnswer() {
  const correctAnswer = document.createElement("button");
  const className = "mx-auto text-green-500/50 flex font-medium";

  correctAnswer.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#00ff00");
  svg.classList.add("w-6", "h-6", "opacity-40", "mr-2");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  svg.append(path);

  const span = document.createElement("span");
  span.innerText = "Correct";

  correctAnswer.append(svg, span);
  return correctAnswer;
}

function wrongAnswer() {
  const wrongAnswer = document.createElement("button");
  const className = "mx-auto text-red-500/50 flex font-medium";

  wrongAnswer.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ff0000");
  svg.classList.add("w-6", "h-6", "opacity-40", "mr-2");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  svg.append(path);

  const span = document.createElement("span");
  span.innerText = "Wrong";

  wrongAnswer.append(svg, span);
  return wrongAnswer;
}




*/

/* check mark
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 */

/* exclamation mark
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
 */

/* x mark
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 */

/*


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
  


  */
