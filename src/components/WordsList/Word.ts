export default function Word() {
  // The main container it's just a border to contan everything else
  const container = document.createElement("div");
  container.setAttribute("id", "word-1");
  const className0 =
    "h-16 border border-[hsl(212,12%,21%)] mb-4 grid grid-cols-[64px,64px,128px] gap-x-1";
  container.setAttribute("class", className0);

  // **********[Sound Button]********** //

  const soundBtnContainer = document.createElement("div");
  const className1 = "w-full h-full flex justify-center items-center";
  soundBtnContainer.setAttribute("class", className1);

  const soundBtn = document.createElement("button");
  const className2 = "bg-[hsl(216,28%,7%)] p-3 rounded-lg";
  soundBtn.setAttribute("class", className2);

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
  container.append(soundBtnContainer);

  // **********[Kanji]********** //

  const kanjiContainer = document.createElement("div");
  const className3 = "w-full h-full flex justify-center items-center";
  kanjiContainer.setAttribute("class", className3);

  const kanji = document.createElement("span");
  const className4 = "text-white";
  kanji.setAttribute("class", className4);
  kanji.innerText = "東京";

  kanjiContainer.append(kanji);
  container.append(kanjiContainer);

  // **********[Hiragana]********** //
  const hiraganaContainer = document.createElement("div");
  const className5 = "w-full h-full flex justify-center items-center";
  hiraganaContainer.setAttribute("class", className5);

  const hiragana = document.createElement("span");
  const className = "text-white";
  hiragana.setAttribute("class", className);
  hiragana.innerText = "とうきょう";

  hiraganaContainer.append(hiragana);
  container.append(hiraganaContainer);

  // **********[Hiragana]********** //

  return container;
}
