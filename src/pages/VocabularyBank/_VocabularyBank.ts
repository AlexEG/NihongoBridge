import LocalNav from "../../../src/common/LocalNav/_LocalNav";
import DuolingoEnglishIPA from "../IPA/DuolingoEnglishIPA";
import Sources from "../IPA/Sources";

export default function VocabularyBank() {
  const MAIN = document.createElement("main");
  MAIN.setAttribute("id", "vocabulary-bank");
  const className =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative";
  MAIN.setAttribute("class", className);

  const sectionsContainer = document.createElement("div");
  const className2 = "";
  sectionsContainer.setAttribute("class", className2);
  sectionsContainer.setAttribute("id", "sections-container");

  sectionsContainer.append(Sources());

  const naveBtns = [
    { text: "btn 1", HTMLpageToRender: DuolingoEnglishIPA() },
    { text: "btn 2", HTMLpageToRender: Sources(), isOpenByDefault: true },
  ];

  MAIN.append(LocalNav(sectionsContainer, naveBtns), sectionsContainer);
  return MAIN;
}
