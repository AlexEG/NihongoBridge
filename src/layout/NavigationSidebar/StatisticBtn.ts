import SidebarNavigationBtn from "./SidebarNavigationBtn";

export default function StatisticBtn() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-7", "h-7", "opacity-40", "group-hover:opacity-90");

  const path0 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path0.setAttribute("stroke-linecap", "round");
  path0.setAttribute("stroke-linejoin", "round");
  path0.setAttribute("d", "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z");
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("stroke-linecap", "round");
  path1.setAttribute("stroke-linejoin", "round");
  path1.setAttribute("d", "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z");

  svg.append(path0, path1);

  return SidebarNavigationBtn(svg, "Statistic");
}
