export default function PlaySoundBtn(
  size: "large" | "medium" | "small",
  playSpeed: "1" | "0.6"
) {
  const soundBtn = document.createElement("button");
  const className = "group w-fit h-fit bg-[hsl(216,28%,7%)] p-3 rounded-lg";
  soundBtn.setAttribute("class", className);

  soundBtn.addEventListener("click", () => {
    const ExerciseComponent = soundBtn.parentElement.parentElement;
    // console.log("ExerciseComponent:", ExerciseComponent);

    const audio = new Audio(ExerciseComponent.dataset.soundFilePath);
    if (!(playSpeed === "1")) audio.playbackRate = 0.6;
    audio.play();
  });

  const btnSize =
    size === "large" ? "w-12 h-12" : size === "medium" ? "h-12" : "w-6 h-6";

  const className2 = "opacity-60 group-hover:opacity-100 transition-opacity";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffff");
  svg.setAttribute("class", `${btnSize} ${className2}`);

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
