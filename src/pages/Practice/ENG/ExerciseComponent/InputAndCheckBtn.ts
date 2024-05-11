export default function InputAndCheckBtn(ECID: string) {
  const inputAndCheckBtnContainer = document.createElement("div");
  const className = "mx-auto flex justify-center gap-x-2 mt-2 border0";
  inputAndCheckBtnContainer.setAttribute("class", className);

  //* input
  const input = document.createElement("input");
  const className2 =
    "text-[hsl(212,12%,80%)] border border-[hsl(216,28%,20%)] p-4 text-lg font-semibold bg-[hsl(216,28%,7%)] w-96";

  input.setAttribute("type", "text");
  input.setAttribute("class", className2);
  // input.setAttribute("autofocus", "");
  input.setAttribute("placeholder", "cat, water, etc...");
  input.setAttribute("id", `${ECID}--input`);
  input.oninput = () => input.setAttribute("value", input.value);

  //* checkBtn
  const checkBtn = document.createElement("button");
  const className3 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  checkBtn.setAttribute("class", className3);
  checkBtn.setAttribute("id", `${ECID}--check-btn`);
  checkBtn.textContent = "Check";

  inputAndCheckBtnContainer.append(input, checkBtn);

  return inputAndCheckBtnContainer;
}
