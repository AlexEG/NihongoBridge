import Practice from "../../pages/Practice/_Practice";
import SidebarNavigationBtn from "./SidebarNavigationBtn";

export default function PracticeBtn() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-7", "h-7", "opacity-40", "group-hover:opacity-90");

  const path0 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path0.setAttribute("stroke-linecap", "round");
  path0.setAttribute("stroke-linejoin", "round");
  path0.setAttribute(
    "d",
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  );

  svg.append(path0);

  const button = SidebarNavigationBtn(svg, "Practice");
  button.addEventListener("click", switchToIPA);

  function switchToIPA() {
    const root = document.querySelector("#root");
    root.querySelector("main").remove();
    root.append(Practice());
  }
  return button;
}
