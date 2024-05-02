export default function TotalXp() {
  const TotalXp = document.createElement("div");
  const className = "flex gap-x-1";
  TotalXp.setAttribute("class", className);

  const span1 = document.createElement("span");
  const className2 = "text-white/50";
  span1.setAttribute("class", className2);
  span1.innerText = "5";

  const span2 = document.createElement("span");
  const className3 = "text-white/30";
  span2.setAttribute("class", className3);
  span2.innerText = "XP";

  TotalXp.append(span1, span2);
  return TotalXp;
}
