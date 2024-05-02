import ToolTip from "./ToolTip";

export default function SidebarNavigationBtn(
  svg: SVGSVGElement,
  tooltiptext: string
) {
  const button = document.createElement("button");
  const className =
    "group w-full h-12 flex justify-center items-center relative ";
  button.setAttribute("class", className);

  button.append(svg, ToolTip(tooltiptext));
  return button;
}
