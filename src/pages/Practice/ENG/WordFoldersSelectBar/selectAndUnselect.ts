export default function selectAndUnselect(event: Event) {
  const target = event.target as HTMLElement;
  if (target && target.classList.contains("words-folder")) {
    console.log("Box clicked:", target.dataset.folderFileName);

    if (target.dataset.isSelected === "false") {
      target.dataset.isSelected = "true";

      target.classList.add("border-teal-600", "bg-real-600");
      target.classList.remove(
        "border-[hsl(212,12%,21%)]",
        "hover:border-[hsl(212,12%,81%)]"
      );
    } else {
      target.dataset.isSelected = "false";
      target.classList.remove("border-teal-600");
      target.classList.add(
        "border-[hsl(212,12%,21%)]",
        "hover:border-[hsl(212,12%,81%)]"
      );
    }
  }
}
