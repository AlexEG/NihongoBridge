import SidebarNavigationBtn from "./SidebarNavigationBtn";
import IPA from "../../pages/IPA/_IPA";
export default function IPABtn() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("width", "512.000000pt");
  svg.setAttribute("height", "512.000000pt");
  svg.setAttribute("viewBox", "0 0 512.000000 512.000000");
  svg.setAttribute("stroke-width", "1.8");
  svg.setAttribute("stroke", "#ffffff");
  svg.setAttribute("version", "1.0");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.classList.add("w-7", "h-7", "opacity-40", "group-hover:opacity-90");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute(
    "d",
    "M60 1263 l0 -117 95 9 95 9 -3 -367 -3 -367 -92 7 -92 7 0 -122 0 -122 350 0 350 0 0 123 0 123 -100 -12 -100 -12 0 371 0 371 95 -7 95 -7 6 115 6 115 -351 0 -351 0 0 -117z"
  );
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute(
    "d",
    "M980 790 l0 -590 162 0 162 0 -7 188 -7 188 170 8 c347 18 554 241 480 516 -59 220 -200 280 -654 280 l-306 0 0 -590z m483 350 c104 0 166 -56 163 -149 -4 -123 -58 -159 -264 -176 l-67 -5 1 165 c1 91 2 171 3 177 0 7 21 7 46 1 25 -7 78 -13 118 -13z"
  );
  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute(
    "d",
    "M2234 802 c-118 -318 -214 -584 -214 -590 0 -7 71 -12 157 -12 l157 0 36 120 36 120 214 0 214 0 36 -120 36 -120 169 0 c153 0 168 3 155 35 -8 19 -107 283 -220 585 l-206 550 -178 6 -177 5 -215 -579z m435 138 c18 -71 50 -164 71 -205 l39 -75 -151 0 c-137 0 -151 3 -138 35 13 30 94 271 122 363 13 41 20 26 57 -118z"
  );

  // Create a group element to contain the paths
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute(
    "transform",
    "translate(0.000000,385.000000) scale(0.150000,-0.150000)"
  );
  g.setAttribute("fill", "#ffffff");
  g.setAttribute("stroke", "none");

  // Append the path elements to the group element
  g.append(path1, path2, path3);
  svg.append(g);

  const button = SidebarNavigationBtn(svg, "International Phonetic Alphabet");
  button.addEventListener("click", switchToIPA);

  function switchToIPA() {
    const root = document.querySelector("#root");
    root.querySelector("main").remove();
    root.append(IPA());
  }
  return button;
}
