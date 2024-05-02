import { WordInfo } from "./_types";

export default function WordENG(wordInfo: WordInfo) {
  // console.log("word:", word);
  // The main container it's just a border to contan everything else
  const WordENG = document.createElement("div");
  const className0 =
    "h-16 border border-[hsl(212,12%,21%)] mb-4 grid grid-cols-[64px,128px,128px,256px,256px,128px] gap-x-1 w-fit mx-auto";
  WordENG.setAttribute("class", className0);

  // **********[Sound Button]********** //

  const soundBtnContainer = document.createElement("div");
  const className1 = "w-full h-full flex justify-center items-center";
  soundBtnContainer.setAttribute("class", className1);

  const soundBtn = document.createElement("button");
  const className2 = "bg-[hsl(216,28%,7%)] p-3 rounded-lg";
  soundBtn.setAttribute("class", className2);
  soundBtn.addEventListener("click", () => {
    const audio = new Audio(wordInfo.soundFile);
    audio.play();
  });

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
  WordENG.append(soundBtnContainer);

  // **********[word]********** //

  const wordContainer = document.createElement("div");
  const className3 = "w-full h-full flex  items-center";
  wordContainer.setAttribute("class", className3);

  const word = document.createElement("span");
  const className4 = "text-white";
  word.setAttribute("class", className4);
  word.innerText = wordInfo.word;

  wordContainer.append(word);
  WordENG.append(wordContainer);

  // **********[syllable_division & ipa_us]********** //
  const syllableDivisionAndIpaUSContainer = document.createElement("div");
  const className5 = "w-full h-full flex flex-col justify-center";
  syllableDivisionAndIpaUSContainer.setAttribute("class", className5);

  const syllableDivision = document.createElement("span");
  const className6 = "text-white/50 truncate text-xs";
  syllableDivision.setAttribute("class", className6);
  syllableDivision.innerText = wordInfo.syllable_division;

  const ipaUS = document.createElement("span");
  const className7 = "text-white truncate text-sm";
  ipaUS.setAttribute("class", className7);
  ipaUS.innerText = wordInfo.ipa_us;

  syllableDivisionAndIpaUSContainer.append(syllableDivision, ipaUS);
  WordENG.append(syllableDivisionAndIpaUSContainer);

  // **********[definition]********** //
  const definitionContainer = document.createElement("div");
  const className8 = "w-full h-full flex items-center";
  definitionContainer.setAttribute("class", className8);

  const definition = document.createElement("span");
  const className9 = "text-white truncate-2-lines text-xs";
  definition.setAttribute("class", className9);
  definition.innerText = wordInfo.definition;

  definitionContainer.append(definition);
  WordENG.append(definitionContainer);

  // **********[Example]********** //
  const exampleContainer = document.createElement("div");
  const className10 = "w-full h-full flex items-center";
  exampleContainer.setAttribute("class", className10);

  const example = document.createElement("span");
  const className11 = "text-white truncate-2-lines text-xs";
  example.setAttribute("class", className11);
  example.innerText = wordInfo.example;

  exampleContainer.append(example);
  WordENG.append(exampleContainer);

  // **********[similar_words]********** //
  const similarWordsContainer = document.createElement("div");
  const className12 = "w-full h-full flex flex-col justify-center items-center";
  similarWordsContainer.setAttribute("class", className12);

  const className = "text-white/50 truncate text-xs text-center ";

  const word1 = document.createElement("span");
  word1.setAttribute("class", className);
  word1.innerText = wordInfo.similar_words[0];

  const word2 = document.createElement("span");
  word2.setAttribute("class", className);
  word2.innerText = wordInfo.similar_words[1];

  const word3 = document.createElement("span");
  word3.setAttribute("class", className);
  word3.innerText = wordInfo.similar_words[2];

  similarWordsContainer.append(word1, word2, word3);
  WordENG.append(similarWordsContainer);

  return WordENG;
}
