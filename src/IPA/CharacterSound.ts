export default function CharacterSound(
  character: string,
  wordExample: string,
  soundFile: string
) {
  const characterBtn = document.createElement("button");
  characterBtn.setAttribute(
    "class",
    "w-20 h-20 flex flex-col p-2 border border-white/50 "
  );

  const span1 = document.createElement("span");
  const span2 = document.createElement("span");

  span1.setAttribute("class", "w-full text-white/90 text-center text-3xl");
  span2.setAttribute("class", "w-full text-white/50 text-center");

  span1.innerText = character;
  span2.innerText = wordExample;

  characterBtn.append(span1, span2);

  characterBtn.addEventListener("click", () => {
    const audio = new Audio(soundFile);
    audio.play();
  });

  return characterBtn;
}
