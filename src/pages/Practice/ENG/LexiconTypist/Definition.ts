export default function Definition(text: string) {
  const definitionContainer = document.createElement("div");
  const className2 = "pt-10";
  definitionContainer.setAttribute("class", className2);
  definitionContainer.setAttribute("id", "eng--lexicon-typist--definition");

  const definition = document.createElement("h1");
  const className3 =
    "text-white/90 font-semibold text-xl text-center max-w-4xl mx-auto";
  definition.setAttribute("class", className3);

  definition.innerText = text;

  definitionContainer.append(definition);
  return definitionContainer;
}
