// import CustomizableQuestionNavigator from "../../CustomizableQuestionNavigator";
import getNextQuestion from "./getNextQuestion";
import IndicatorCorrectWrong from "./IndicatorCorrectWrong";
import Input from "./Input";
import SubmitBtn from "./SubmintBtn";
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
}

export default function ListenAndSpell(wordsArr: WordInfo[]) {
  const ListenAndSpell = document.createElement("div");
  const className = "relative flex flex-col justify-evenly border0 ";
  ListenAndSpell.setAttribute("class", className);
  ListenAndSpell.setAttribute("id", "practice--eng---listen-and-spell");
  ListenAndSpell.dataset.correctAnswer = "";

  const questionOrderType = "random";
  const firstQuestion = getNextQuestion(questionOrderType, wordsArr);
  ListenAndSpell.dataset.correctAnswer = firstQuestion.word;
  ListenAndSpell.dataset.soundFilePath = firstQuestion.soundFile;

  // console.log(firstQuestion);

  const input = Input();
  const submitBtn = SubmitBtn();

  //* input + submitBtn container + correct + wrong
  const inputSubmitBtnContainer = document.createElement("div");
  const className6 = "mx-auto flex justify-center gap-x-2 mt-2 border0";
  inputSubmitBtnContainer.setAttribute("class", className6);
  inputSubmitBtnContainer.append(input, submitBtn);

  submitBtn.addEventListener("click", () =>
    submitAndValidationClickHandler(input.value, questionOrderType, wordsArr)
  );

  //* sound
  const normalSlowSpeedWrapper = document.createElement("div");
  normalSlowSpeedWrapper.setAttribute("class", "flex gap-x-2 justify-center");
  normalSlowSpeedWrapper.append(
    playSoundBtnNormalSpeed(),
    playSoundBtnSlowSpeed()
  );

  ListenAndSpell.append(
    // CustomizableQuestionNavigator(),
    normalSlowSpeedWrapper,
    IndicatorCorrectWrong(),
    inputSubmitBtnContainer
  );

  return ListenAndSpell;
}

function playSoundBtnNormalSpeed() {
  const soundBtnContainer = document.createElement("div");
  const className1 = "h-32 flex justify-center items-end";
  soundBtnContainer.setAttribute("class", className1);

  const soundBtn = document.createElement("button");
  const className2 = "bg-[hsl(216,28%,7%)] p-3 rounded-lg";
  soundBtn.setAttribute("class", className2);

  soundBtn.addEventListener("click", () => {
    const ListenAndSpell = document.querySelector(
      "#practice--eng---listen-and-spell"
    ) as HTMLElement;
    const audio = new Audio(ListenAndSpell.dataset.soundFilePath);
    audio.play();
  });

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffffcc");
  svg.classList.add("w-12", "h-12");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
  );

  svg.append(path);
  soundBtn.append(svg);
  soundBtnContainer.append(soundBtn);
  return soundBtnContainer;
}

function playSoundBtnSlowSpeed() {
  const soundBtnContainer = document.createElement("div");
  const className1 = "h-32 flex justify-center items-end";
  soundBtnContainer.setAttribute("class", className1);

  const soundBtn = document.createElement("button");
  const className2 = "bg-[hsl(216,28%,7%)] p-3 rounded-lg";
  soundBtn.setAttribute("class", className2);

  soundBtn.addEventListener("click", () => {
    const ListenAndSpell = document.querySelector(
      "#practice--eng---listen-and-spell"
    ) as HTMLElement;
    const audio = new Audio(ListenAndSpell.dataset.soundFilePath);
    audio.playbackRate = 0.6;
    audio.play();
  });

  soundBtn.setAttribute("title", "0.6x speed");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffffcc");
  svg.classList.add("w-6", "h-6");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
  );

  svg.append(path);
  soundBtn.append(svg);
  soundBtnContainer.append(soundBtn);
  return soundBtnContainer;
}
