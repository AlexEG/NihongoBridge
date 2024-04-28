import SidebarNavigationBtn from "./SidebarNavigationBtn";

export default function KatakanaBtn() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("w-7", "h-7", "opacity-40", "group-hover:opacity-90");
  svg.setAttribute("width", "512.000000pt");
  svg.setAttribute("height", "512.000000pt");
  svg.setAttribute("viewBox", "0 0 512.000000 512.000000");

  // Create the group for the SVG
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute(
    "transform",
    "translate(0.000000,512.000000) scale(0.100000,-0.100000)"
  );
  g.setAttribute("fill", "#ffffff");
  g.setAttribute("stroke", "none");
  g.style.strokeWidth = "0.5";
  // Create the path for the SVG
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    "M2440 4909 c-59 -26 -105 -72 -138 -134 -26 -50 -26 -52 -33 -355 -7 -273 -16 -433 -35 -627 l-7 -63 -742 0 c-837 0 -810 2 -892 -73 -64 -58 -93 -124 -92 -207 0 -36 6 -79 12 -97 22 -60 72 -117 128 -148 l54 -30 728 -3 c400 -1 727 -5 727 -7 0 -23 -71 -347 -107 -490 -88 -351 -196 -648 -340 -935 -227 -454 -512 -785 -858 -995 -157 -95 -201 -162 -193 -296 5 -88 34 -147 95 -198 67 -55 174 -76 264 -51 71 20 314 184 453 306 627 551 1041 1419 1250 2627 l7 37 659 0 660 0 0 -37 c0 -111 -77 -870 -125 -1243 -56 -428 -152 -931 -184 -963 -6 -6 -176 -5 -478 3 -521 13 -516 14 -599 -49 -101 -76 -138 -221 -84 -334 31 -65 109 -133 174 -152 38 -10 166 -17 501 -25 443 -11 641 -8 720 12 242 60 378 448 504 1438 68 524 151 1422 151 1615 0 101 -27 163 -95 223 -85 75 -51 72 -941 72 l-793 0 5 33 c15 109 26 334 31 618 l6 326 -25 54 c-49 108 -143 169 -258 169 -44 0 -80 -7 -110 -21z"
  );
  path.setAttribute("stroke-width", "0.5");
  g.appendChild(path);

  svg.appendChild(g);
  return SidebarNavigationBtn(svg, "Katakana");
}
