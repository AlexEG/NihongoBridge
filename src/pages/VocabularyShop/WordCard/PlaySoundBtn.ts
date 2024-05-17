export default function PlaySoundBtn(
  word: string,
  is_audio_file_available: boolean
) {
  const soundBtn = document.createElement("button");
  const className2 = "group w-fit h-fit bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  soundBtn.setAttribute("class", className2);
  soundBtn.dataset.playSpeed = "1";

  soundBtn.addEventListener("click", () => {
    const audioFilePath = is_audio_file_available
      ? `https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/vocabulary-audio-files/${word}.mp3`
      : "/data/sound/nosound.mp3";
    console.log("audioFilePath", audioFilePath);

    const audio = new Audio(audioFilePath);
    if (!(soundBtn.dataset.playSpeed === "1")) audio.playbackRate = 0.6;
    audio.play();
    soundBtn.dataset.playSpeed = "0.6";
  });

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffff");
  svg.setAttribute(
    "class",
    "w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
  );

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute(
    "d",
    "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
  );

  svg.append(path);
  soundBtn.append(svg);

  return soundBtn;
}
