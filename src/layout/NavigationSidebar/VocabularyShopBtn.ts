import VocabularyShop from "../../pages/VocabularyShop/_VocabularyShop";
import SidebarNavigationBtn from "./SidebarNavigationBtn";

export default function VocabularyShopBtn() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-7", "h-7", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
  );

  svg.append(path);
  const button = SidebarNavigationBtn(svg, "Vocabulary Shop");
  button.addEventListener("click", switchToVocabularyShop);

  function switchToVocabularyShop() {
    const root = document.querySelector("#root");
    root.querySelector("main").remove();
    root.append(VocabularyShop());
  }
  return button;
}
