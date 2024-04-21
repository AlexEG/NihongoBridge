export default function ToolTip() {
  const element = document.createElement("span");
  element.setAttribute("id", "tooltip");
  element.innerText = "Settings";
  element.setAttribute(
    "class",
    "tooltiptext px-2 py-0.5 border border-[#30363d] bg-[#0d1117] text-sm text-white/75 rounded-[3.2px] top-1/2 -translate-y-1/2 left-[51px]"
  );
  return element;
}
