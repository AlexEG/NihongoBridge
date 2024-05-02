import LocalNav from "../../../src/common/LocalNav/_LocalNav";
import DuolingoEnglishIPA from "./DuolingoEnglishIPA";
import Sources from "./Sources";

export default function IPA() {
  const IPA_MAIN = document.createElement("main");
  IPA_MAIN.setAttribute("id", "ipa");
  const className1 =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative";
  IPA_MAIN.setAttribute("class", className1);

  const sectionsContainer = document.createElement("div");
  const className2 = "";
  sectionsContainer.setAttribute("class", className2);
  sectionsContainer.setAttribute("id", "sections-container");

  sectionsContainer.append(Sources());

  const naveBtns = [
    { text: "Duolingo ENG", HTMLpageToRender: DuolingoEnglishIPA() },
    { text: "Sources", HTMLpageToRender: Sources(), isOpenByDefault: true },
  ];
  IPA_MAIN.append(LocalNav(sectionsContainer, naveBtns), sectionsContainer);
  return IPA_MAIN;
}
