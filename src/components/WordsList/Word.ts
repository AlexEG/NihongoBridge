type word = {
  kanji: string;
  hiragana: string;
  english: string;
  description: string;
  soundFile: string;
  example: {
    japanese: string;
    english: string;
  };
};
export default function Word(word: word) {
  // console.log("word:", word);
  // The main container it's just a border to contan everything else
  const container = document.createElement("div");
  const className0 =
    "h-16 border border-[hsl(212,12%,21%)] mb-4 grid grid-cols-[64px,64px,128px,128px,128px,256px,256px] gap-x-1 w-fit mx-auto";
  container.setAttribute("class", className0);

  // **********[Sound Button]********** //

  const soundBtnContainer = document.createElement("div");
  const className1 = "w-full h-full flex justify-center items-center";
  soundBtnContainer.setAttribute("class", className1);

  const soundBtn = document.createElement("button");
  const className2 = "bg-[hsl(216,28%,7%)] p-3 rounded-lg";
  soundBtn.setAttribute("class", className2);
  soundBtn.addEventListener("click", () => {
    const audio = new Audio(word.soundFile);
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
  container.append(soundBtnContainer);

  // **********[Kanji]********** //

  const kanjiContainer = document.createElement("div");
  const className3 = "w-full h-full flex justify-center items-center";
  kanjiContainer.setAttribute("class", className3);

  const kanji = document.createElement("span");
  const className4 = "text-white";
  kanji.setAttribute("class", className4);
  kanji.innerText = word.kanji;

  kanjiContainer.append(kanji);
  container.append(kanjiContainer);

  // **********[Hiragana]********** //
  const hiraganaContainer = document.createElement("div");
  const className5 = "w-full h-full flex gap-y-1 justify-center items-center";
  hiraganaContainer.setAttribute("class", className5);

  const hiragana = document.createElement("span");
  const classNam6 = "text-white";
  hiragana.setAttribute("class", classNam6);
  hiragana.innerText = word.hiragana;

  hiraganaContainer.append(hiragana);
  container.append(hiraganaContainer);

  // **********[pitchAccentPattern]********** //
  const pitchAccentPatternContainer = document.createElement("div");
  const className50 =
    "w-full h-full flex flex-col gap-y-1 justify-center items-center";
  pitchAccentPatternContainer.setAttribute("class", className50);

  const svgElement: SVGSVGElement = createSVGFromNumbers(
    word.pitchAccentPattern
  );

  pitchAccentPatternContainer.append(svgElement);
  container.append(pitchAccentPatternContainer);

  // **********[English]********** //
  const englishContainer = document.createElement("div");
  const className7 = "w-full h-full flex justify-center items-center";
  englishContainer.setAttribute("class", className7);

  const english = document.createElement("span");
  const classNam8 = "text-white";
  english.setAttribute("class", classNam8);
  english.innerText = word.english;

  englishContainer.append(english);
  container.append(englishContainer);

  // **********[description]********** //
  const descriptionContainer = document.createElement("div");
  const className9 = "w-full h-full flex justify-center items-center";
  descriptionContainer.setAttribute("class", className9);

  const description = document.createElement("span");
  const className10 = "text-white truncate-2-lines text-xs";
  description.setAttribute("class", className10);
  description.innerText = word.description;

  descriptionContainer.append(description);
  container.append(descriptionContainer);

  // **********[Example]********** //
  const exampleContainer = document.createElement("div");
  const className11 = "w-full h-full flex flex-col justify-center";
  exampleContainer.setAttribute("class", className11);

  const exampleEnglish = document.createElement("span");
  const className12 = "text-white/50 truncate text-xs text-center";
  exampleEnglish.setAttribute("class", className12);
  exampleEnglish.innerText = word.example.english;

  const exampleJapanese = document.createElement("span");
  const className13 = "text-white truncate text-sm text-center";
  exampleJapanese.setAttribute("class", className13);
  exampleJapanese.innerText = word.example.japanese;

  exampleContainer.append(exampleEnglish, exampleJapanese);
  container.append(exampleContainer);

  return container;
}

// Define the SVG namespace
const svgNS = "http://www.w3.org/2000/svg";

// Function to create a dot
function createDot(x: number, y: number): SVGCircleElement {
  const dot = document.createElementNS(svgNS, "circle") as SVGCircleElement;
  dot.setAttribute("cx", x.toString());
  dot.setAttribute("cy", y.toString());
  dot.setAttribute("r", "2");
  dot.setAttribute("fill", "#fff");
  return dot;
}

// Function to create a line
function createLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): SVGLineElement {
  const line = document.createElementNS(svgNS, "line") as SVGLineElement;
  line.setAttribute("x1", x1.toString());
  line.setAttribute("y1", y1.toString());
  line.setAttribute("x2", x2.toString());
  line.setAttribute("y2", y2.toString());
  line.setAttribute("stroke", "#ffffffaa");
  return line;
}

// Function to create SVG from numbers
function createSVGFromNumbers(numbers: number[]): SVGSVGElement {
  const svg = document.createElementNS(svgNS, "svg") as SVGSVGElement;
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "35px");

  let previousDot: SVGCircleElement | null = null;

  numbers.forEach((number, index) => {
    // Calculate position for the dot
    const x = (index + 1) * 15; // This is an arbitrary spacing value
    const y = 30 - number * 10; // Assuming the SVG height is 100 for demonstration

    // Create and append the dot
    const dot = createDot(x, y);
    svg.appendChild(dot);

    // If there's a previous dot, create and append a line
    if (previousDot) {
      const line = createLine(
        parseInt(previousDot.getAttribute("cx")!),
        parseInt(previousDot.getAttribute("cy")!),
        x,
        y
      );
      svg.insertBefore(line, svg.firstChild); // Insert line behind dots
    }

    // Update the previous dot reference
    previousDot = dot;
  });

  return svg;
}
