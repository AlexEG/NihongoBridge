export default function Input() {
  //* input
  const input = document.createElement("input");
  const className4 =
    "text-[hsl(212,12%,80%)] border border-[hsl(216,28%,20%)] p-4 text-lg font-semibold bg-[hsl(216,28%,7%)] w-96";

  input.setAttribute("type", "text");
  input.setAttribute("class", className4);
  input.setAttribute("placeholder", "cat, water, etc...");
  input.setAttribute("id", "practice--eng---listen-and-spell--input");

  return input;
}
