import LocalNav from "../../../src/common/LocalNav/_LocalNav";
// import LexiconTypist from "./ENG/LexiconTypist/_LexiconTypist";
import English from "./ENG/_English";
import Japanese from "./JP/_Japanese";

// so they just run one time
const ENGLISH = English();
const JAPANESE = Japanese();

export default function Practice() {
  const MAIN = document.createElement("main");
  MAIN.setAttribute("id", "practice");
  const className =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative";
  MAIN.setAttribute("class", className);

  const naveBtns = [
    { text: "English", HTMLpageToRender: ENGLISH, isOpenByDefault: true },
    { text: "日本語", HTMLpageToRender: JAPANESE },
  ];

  MAIN.append(LocalNav(sectionsContainer(), naveBtns), sectionsContainer());
  return MAIN;
}

function sectionsContainer() {
  const sectionsContainer = document.createElement("div");
  const className2 = "";
  sectionsContainer.setAttribute("class", className2);
  sectionsContainer.setAttribute("id", "sections-container");

  sectionsContainer.append(ENGLISH);
  // sectionsContainer.append(LexiconTypist());

  return sectionsContainer;
}
