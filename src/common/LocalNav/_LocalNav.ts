type navBtns = {
  text: string;
  HTMLpageToRender: HTMLElement;
  isOpenByDefault?: boolean;
}[];

export default function LocalNav(
  targetToRenderTo: HTMLElement,
  navBtns: navBtns
) {
  const nav = document.createElement("div");
  const className = "border0 mx-auto pt-4 pb-6 flex justify-center gap-x-2";
  nav.setAttribute("class", className);

  for (const [_, { text, HTMLpageToRender, isOpenByDefault }] of Object.entries(
    navBtns
  )) {
    nav.append(navBtn(text, HTMLpageToRender, isOpenByDefault));
  }

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
    // console.log("sectionsContainer", sectionsContainer);
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
