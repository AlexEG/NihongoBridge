export default function ToolTip(tooltiptext: string) {
  const element = document.createElement("span");
  element.innerText = tooltiptext;
  const className =
    "tooltiptext px-2 py-0.5 border border-[#30363d] bg-[#0d1117] text-sm text-white/75 rounded-[3.2px] top-1/2 -translate-y-1/2 left-[51px] z-50";
  element.setAttribute("class", className);
  return element;
}
