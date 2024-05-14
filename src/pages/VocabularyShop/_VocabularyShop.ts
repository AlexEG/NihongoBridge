import LocalNav from "../../../src/common/LocalNav/_LocalNav";

import English from "./English";
import Japanese from "./Japanese";

// so they just run one time
const ENGLISH = English();
const JAPANESE = Japanese();

export default function VocabularyShop() {
  const MAIN = document.createElement("main");
  MAIN.setAttribute("id", "vocabulary-shop");
  const className =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative border0";
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

  return sectionsContainer;
}

//TODO instead of get all folders just have a one json file that have in it the metadata of all folders and when the user want to open one folder or add it to there vocab bank you just grap that one json file and if they just looking around there cpu doesn't do any work
