export default function IPA() {
  const element = document.createElement("main");
  element.setAttribute("id", "ipa");
  const className =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto p-10 overflow-auto";
  element.setAttribute("class", className);

  return element;
}
