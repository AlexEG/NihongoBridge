export default function EnterKey() {
  const key = document.createElement("button");
  const className =
    "group w-fit h-fit bg-[hsl(216,28%,7%)] p-3 rounded-lg min-w-10";
  key.setAttribute("class", className);

  const className2 = "opacity-60 group-hover:opacity-100 transition-opacity";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", `w-6 h-6 ${className2}`);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("clip-rule", "evenodd");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("fill", "#ffffff");

  path.setAttribute(
    "d",
    "M21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4V11C19 11.7956 18.6839 12.5587 18.1213 13.1213C17.5587 13.6839 16.7956 14 16 14H6.41421L9.70711 10.7071C10.0976 10.3166 10.0976 9.68342 9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289L3.29289 14.2929C2.90237 14.6834 2.90237 15.3166 3.29289 15.7071L8.29289 20.7071C8.68342 21.0976 9.31658 21.0976 9.70711 20.7071C10.0976 20.3166 10.0976 19.6834 9.70711 19.2929L6.41421 16H16C17.3261 16 18.5979 15.4732 19.5355 14.5355C20.4732 13.5979 21 12.3261 21 11V4Z"
  );

  svg.append(path);
  key.append(svg);
  key.addEventListener("click", clickCheckBtn);
  function clickCheckBtn() {
    const checkBtn = key.parentElement.parentElement.parentElement.parentElement
      .firstElementChild.nextElementSibling.nextElementSibling
      .lastElementChild as HTMLInputElement;

    console.log("checkBtn:", checkBtn);
    checkBtn.click();
  }
  return key;
}
