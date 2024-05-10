export default function SubmitBtn() {
  const submitBtn = document.createElement("button");
  const className5 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  submitBtn.setAttribute("class", className5);
  submitBtn.setAttribute("id", "practice--eng---listen-and-spell--submit-btn");
  submitBtn.innerText = "submit";

  // document.addEventListener("keydown", function (event) {
  //   if (event.key === "Enter") {
  //     submitBtn.click();
  //   }
  // });

  return submitBtn;
}
