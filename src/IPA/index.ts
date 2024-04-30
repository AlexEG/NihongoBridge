import DuolingoEnglishIPA from "./DuolingoEnglishIPA";

export default function IPA() {
  const IPA_MAIN = document.createElement("main");
  IPA_MAIN.setAttribute("id", "ipa");
  const className1 =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative";
  IPA_MAIN.setAttribute("class", className1);

  const sectionsContainer = document.createElement("div");
  const className2 = "";
  sectionsContainer.setAttribute("class", className2);
  sectionsContainer.setAttribute("id", "sections-container");
  sectionsContainer.append(DuolingoEnglishIPA());

  IPA_MAIN.append(localNav(), sectionsContainer);
  return IPA_MAIN;
}

function duolingoDisclosure() {
  const disclosure = document.createElement("p");
  const className = "text-white/30 text-xs ";

  disclosure.setAttribute("class", className);
  disclosure.innerText =
    "The sound and design elements used in this application are sourced from Duolingo. All related rights and trademarks are owned by Duolingo Inc.";
  return disclosure;
}

function localNav() {
  const nav = document.createElement("div");
  const className = "border0 mx-auto pt-4 pb-6 flex justify-center gap-x-2";
  nav.setAttribute("class", className);

  const duolingoEnglishIPABtn = navBtn(
    "Duolingo ENG",
    DuolingoEnglishIPA(),
    true
  );
  const ipachartBtn = navBtn("IPA Chart");
  const sourcesBtn = navBtn("Sources");

  nav.append(duolingoEnglishIPABtn, ipachartBtn, sourcesBtn);

  //* click functionality

  return nav;
}

function navBtn(
  text: string,
  associatedSection: HTMLElement,
  isOpenByDefault?: boolean
) {
  const btn = document.createElement("button");
  const className =
    "p-2 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";
  const hightlightedStyles =
    "p-2 text-[hsl(212,12%,80%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)]";
  btn.setAttribute("class", className);
  btn.innerText = text;
  btn.dataset.isOpen = "false";

  btn.addEventListener("click", clickHandler);
  function clickHandler() {
    // highlight
    const buttons = btn.parentElement.querySelectorAll("button");

    buttons.forEach((btn) => {
      if (btn.dataset.isOpen) {
        btn.setAttribute("class", className);
        btn.dataset.isOpen = "false";
      }
    });
    btn.setAttribute("class", hightlightedStyles);
    btn.dataset.isOpen = "true";

    // change the displayed section
    const sectionsContainer = btn.parentElement.parentElement.querySelector(
      "div#sections-container"
    );
    console.log("sectionsContainer", sectionsContainer);
    if (sectionsContainer.firstElementChild)
      sectionsContainer.firstElementChild.remove();
    sectionsContainer.append(associatedSection);
  }

  // give highlight for the default section
  if (isOpenByDefault) {
    btn.setAttribute("class", hightlightedStyles);
    btn.dataset.isOpen = "true";
  }

  return btn;
}
