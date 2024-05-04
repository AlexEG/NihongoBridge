export default function LexiconTypist() {
  const LexiconTypist = document.createElement("div");
  const className = "relative flex flex-col justify-evenly";
  LexiconTypist.setAttribute("class", className);

  // telescope

  //* definition
  const definitionContainer = document.createElement("div");
  const className2 = " py-6";
  definitionContainer.setAttribute("class", className2);

  const definition = document.createElement("h1");
  const className3 =
    "text-white/90 font-semibold text-xl text-center max-w-4xl mx-auto";
  definition.setAttribute("class", className3);

  definition.innerText =
    "An optical instrument designed to make distant objects appear nearer, containing an arrangement of lenses, or of curved mirrors and lenses, by which rays of light are collected and focused and the resulting image magnified.";

  definitionContainer.append(definition);

  //* input
  const input = document.createElement("input");
  const className4 =
    "text-[hsl(212,12%,80%)] border border-[hsl(216,28%,20%)] p-4 text-lg font-semibold bg-[hsl(216,28%,7%)] w-96 ";

  input.setAttribute("type", "text");
  input.setAttribute("class", className4);
  input.setAttribute("placeholder", "cat, water, etc...");

  //* submit btn
  const submitBtn = document.createElement("button");
  const className5 =
    "px-6 py-1.5 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  submitBtn.setAttribute("class", className5);
  submitBtn.innerText = "submit";

  //* input + submitBtn container
  const inputSubmitBtnContainer = document.createElement("div");
  const className6 = " mx-auto flex justify-center gap-x-2 mt-20";
  inputSubmitBtnContainer.setAttribute("class", className6);
  inputSubmitBtnContainer.append(input, submitBtn);

  LexiconTypist.append(definitionContainer, inputSubmitBtnContainer);
  return LexiconTypist;
}

/*
  //* options
  const optionsContainer = document.createElement("div");
  const className4 =
    "border mx-auto pt-4 pb-6 flex flex-wrap justify-center gap-x-2";
  optionsContainer.setAttribute("class", className4);

  optionsContainer.append(option("111"), option("222"));


function option(text: string) {
  const btn = document.createElement("button");
  const className =
    "p-2 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors";

  btn.setAttribute("class", className);
  btn.innerText = text;
  return btn;
}

*/
