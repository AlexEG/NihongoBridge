import LocalNav from "../../../src/common/LocalNav/_LocalNav";
import English from "./English";
import Japanese from "./Japanese";

export default function Home() {
  const HOME_MAIN = document.createElement("main");
  HOME_MAIN.setAttribute("id", "ipa");
  const className1 =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative";
  HOME_MAIN.setAttribute("class", className1);

  const sectionsContainer = document.createElement("div");
  const className2 = "";
  sectionsContainer.setAttribute("class", className2);
  sectionsContainer.setAttribute("id", "sections-container");

  const ENGLISH = English();
  const JAPANESE = Japanese();
  sectionsContainer.append(ENGLISH);

  const naveBtns = [
    { text: "English", HTMLpageToRender: ENGLISH, isOpenByDefault: true },
    { text: "日本語", HTMLpageToRender: JAPANESE },
  ];
  HOME_MAIN.append(LocalNav(sectionsContainer, naveBtns), sectionsContainer);
  return HOME_MAIN;
}
