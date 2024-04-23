import Word from "./Word";

export default function WordsList() {
  const element = document.createElement("main");
  element.setAttribute("id", "wordslist");
  const className =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto p-10 ";
  element.setAttribute("class", className);

  return element;
}
