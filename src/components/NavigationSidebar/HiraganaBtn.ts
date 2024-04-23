import SidebarNavigationBtn from "./SidebarNavigationBtn";

export default function HiraganaBtn() {
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 46 46");
  svg.setAttribute("stroke-width", "1.6");
  svg.setAttribute("stroke", "#ffffff");
  svg.setAttribute("class", "w-7 h-7 opacity-40 group-hover:opacity-90");

  // Create the paths for the SVG
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M18.0524 5C17.3857 13 17.0524 30.7 21.0524 37.5");
  path1.setAttribute("stroke", "#fff");
  path1.setAttribute("stroke-width", "3");
  path1.setAttribute("stroke-linecap", "round");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute(
    "d",
    "M8.05237 11C12.719 11.1667 24.8524 11.1 36.0524 9.5"
  );
  path2.setAttribute("stroke", "#fff");
  path2.setAttribute("stroke-width", "3");
  path2.setAttribute("stroke-linecap", "round");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute(
    "d",
    "M28.5524 16C28.0524 20.6667 25.1524 31.3 17.5524 36.5C9.95236 41.7 7.38569 37.3333 7.05236 34.5C6.6406 31 8.55236 24 16.5524 21C19.8857 19.6667 27.8191 18.631 33.0524 20.5C40.0524 23 45.0524 37.5 25.0524 41"
  );
  path3.setAttribute("stroke", "#fff");
  path3.setAttribute("stroke-width", "3");
  path3.setAttribute("stroke-linecap", "round");

  // Append the paths to the SVG
  svg.append(path1);
  svg.append(path2);
  svg.append(path3);

  // Append the SVG to the body of the document

  return SidebarNavigationBtn(svg, "Hiragana");
}
