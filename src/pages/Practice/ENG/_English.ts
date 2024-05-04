import LexiconTypist from "./LexiconTypist";

export default function English() {
  const English = document.createElement("div");
  const className =
    "relative grid grid-cols-[256px,256px,256px] place-content-center pt-20 gap-6";
  English.setAttribute("class", className);

  const precisionOfMeaning = ipcc(
    "Precision of Meaning",
    "is a focused exercise where you’ll encounter precise definitions and challenge yourself to identify the correct term from five options"
  );

  const lexiconTypist = ipcc(
    "Lexicon Typist",
    "sharpens your spelling skills by typing the correct word from its definition. Quick, precise, and effective"
  );
  const auditoryLexicon = ipcc(
    "Auditory Lexicon",
    "Enhance your listening accuracy by typing words you hear. Swift, exact, and practical."
  );
  English.append(precisionOfMeaning, lexiconTypist, auditoryLexicon);
  return English;
}

// ipcc = Interactive Practice Card Container
function ipcc(titleText: string, descriptionText: string) {
  const ipcc = document.createElement("div");
  const className2 =
    "group border border-[hsl(212,12%,21%)] w-full h-80 cursor-pointer p-4";
  ipcc.setAttribute("class", className2);

  // icon
  const icon = document.createElement("div");
  const className3 = "flex justify-center items-center h-40";
  icon.setAttribute("class", className3);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-20", "h-20", "opacity-40", "group-hover:opacity-90");

  const path0 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path0.setAttribute("stroke-linecap", "round");
  path0.setAttribute("stroke-linejoin", "round");
  path0.setAttribute(
    "d",
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  svg.append(path0);
  icon.append(svg);

  // title
  const title = document.createElement("h2");
  const className4 = "text-center font-semibold text-lg text-white/80 mb-2";
  title.setAttribute("class", className4);
  title.innerText = titleText;

  // Description
  const description = document.createElement("p");
  const className5 = "text-white/50 text-xs text-center ";
  description.setAttribute("class", className5);
  description.innerText = descriptionText;

  ipcc.append(icon, title, description);

  ipcc.addEventListener("click", clickHandler);

  function clickHandler() {
    ipcc.parentElement.parentElement.append(LexiconTypist());
    ipcc.parentElement.remove();
  }
  return ipcc;
}
