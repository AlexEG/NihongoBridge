export default function TotalXp() {
  const TotalXp = document.createElement("div");
  const className = "flex gap-x-1";
  TotalXp.setAttribute("class", className);
  TotalXp.setAttribute("id", "layout--title-bar-total-xp");

  const dataPromise = window.api.readJsonFile("profile.json");

  // const wordsList: string[] = [];

  dataPromise
    .then((data: { xp: number }) => {
      const span1 = document.createElement("span");
      const className2 = "text-white/50";
      span1.setAttribute("class", className2);
      span1.innerText = data.xp.toString();

      const span2 = document.createElement("span");
      const className3 = "text-white/30";
      span2.setAttribute("class", className3);
      span2.innerText = "XP";

      TotalXp.append(span1, span2);
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });
  return TotalXp;
}
