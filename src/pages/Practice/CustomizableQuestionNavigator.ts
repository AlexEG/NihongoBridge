export default function CustomizableQuestionNavigator() {
  const cqn = document.createElement("div");
  const className = "border0 h-8 flex justify-end pr-2 gap-x-1";
  cqn.setAttribute("class", className);

  cqn.append(
    moreAdjustments(),
    filterByTags(),
    RandomOrderBtn(),
    XpFromHighToLow(),
    XpFromLowToHigh(),
    alphabetFromAtoZ(),
    alphabetFromZtoA()
  );
  return cqn;
}

function RandomOrderBtn() {
  //* Random roder
  const random = document.createElement("button");
  const className2 =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center pl-1";

  random.setAttribute("class", className2);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("stroke-width", "1.1");
  // svg.setAttribute("width", "16px");
  // svg.setAttribute("height", "16px");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-4", "h-4", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    "M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
  );
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path2.setAttribute(
    "d",
    "m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
  );

  svg.append(path, path2);
  random.append(svg);
  return random;
}

function XpFromHighToLow() {
  const XpFromHighToLow = document.createElement("button");
  const className =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center pl-1";

  XpFromHighToLow.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.1");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-5", "h-5", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", "M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3");

  svg.append(path);

  const span = document.createElement("span");
  const className2 = "text-white/40";
  span.setAttribute("class", className2);
  span.innerText = "XP";

  XpFromHighToLow.append(span, svg);
  return XpFromHighToLow;
}

function XpFromLowToHigh() {
  const XpFromLowToHigh = document.createElement("button");
  const className =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center";

  XpFromLowToHigh.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.1");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-5", "h-5", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", "M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18");

  svg.append(path);

  const span = document.createElement("span");
  const className2 = "text-white/40";
  span.setAttribute("class", className2);
  span.innerText = "XP";

  XpFromLowToHigh.append(span, svg);
  return XpFromLowToHigh;
}

function alphabetFromAtoZ() {
  const alphabetFromAtoZ = document.createElement("button");
  const className =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center ";

  alphabetFromAtoZ.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.1");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-5", "h-5", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3");

  svg.append(path);

  const span = document.createElement("span");
  const className2 = "text-white/40";
  span.setAttribute("class", className2);
  span.innerText = "A";

  const span2 = document.createElement("span");
  span2.setAttribute("class", className2);
  span2.innerText = "Z";

  alphabetFromAtoZ.append(span, svg, span2);
  return alphabetFromAtoZ;
}

function alphabetFromZtoA() {
  const alphabetFromZtoA = document.createElement("button");
  const className =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center";

  alphabetFromZtoA.setAttribute("class", className);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.1");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-5", "h-5", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", "M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3");

  svg.append(path);

  const span = document.createElement("span");
  const className2 = "text-white/40";
  span.setAttribute("class", className2);
  span.innerText = "Z";

  const span2 = document.createElement("span");
  span2.setAttribute("class", className2);
  span2.innerText = "A";

  alphabetFromZtoA.append(span, svg, span2);
  return alphabetFromZtoA;
}

function filterByTags() {
  const filterByTags = document.createElement("button");
  const className2 =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center pl-1";

  filterByTags.setAttribute("class", className2);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  // svg.setAttribute("width", "16px");
  // svg.setAttribute("height", "16px");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-6", "h-6", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");

  path.setAttribute(
    "d",
    "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
  );
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");
  path2.setAttribute("d", "M6 6h.008v.008H6V6Z");

  svg.append(path, path2);
  filterByTags.append(svg);
  return filterByTags;
}

function moreAdjustments() {
  const moreAdjustments = document.createElement("button");
  const className2 =
    "w-16 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors group flex justify-center items-center pl-1";

  moreAdjustments.setAttribute("class", className2);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // svg.setAttribute("fill", "#ffffff");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  // svg.setAttribute("width", "16px");
  // svg.setAttribute("height", "16px");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add("w-6", "h-6", "opacity-40", "group-hover:opacity-90");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");

  path.setAttribute(
    "d",
    "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
  );
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");
  path2.setAttribute("d", "M6 6h.008v.008H6V6Z");

  svg.append(path, path2);
  moreAdjustments.append(svg);
  return moreAdjustments;
}
