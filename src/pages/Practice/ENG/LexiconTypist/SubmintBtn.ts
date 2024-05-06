export default function SubmitBtn() {
  const submitBtn = document.createElement("button");
  const className5 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  submitBtn.setAttribute("class", className5);
  submitBtn.setAttribute("id", "eng--lexicon-typist--submit-btn");
  submitBtn.innerText = "submit";
  // Assuming you have a button with an id of 'myButton'
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Check if the 'Enter' key was pressed
      submitBtn.click(); // Trigger the button click
    }
  });
  return submitBtn;
}
