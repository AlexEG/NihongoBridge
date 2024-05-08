export default function CancelBtn() {
  const cancelBtn = document.createElement("button");
  const className =
    "px-2 py-1 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors hover:text-[hsl(212,12%,80%)] mx-auto text-sm mt-10";
  cancelBtn.setAttribute("class", className);
  cancelBtn.textContent = "CANCEL";
  cancelBtn.addEventListener("click", closeAddNewWordFieldsPopup);

  return cancelBtn;
}

function closeAddNewWordFieldsPopup() {
  const addNewWordFieldsPopup = document.querySelector(
    "#vocabulary-bank--eng--add-new-word-input-fields"
  ) as HTMLElement;

  addNewWordFieldsPopup.dataset.isOpen = "false";
  addNewWordFieldsPopup.classList.replace("flex", "hidden");

  const inputs = Array.from(addNewWordFieldsPopup.querySelectorAll("input"));
  for (const input of inputs) input.value = "";
}
