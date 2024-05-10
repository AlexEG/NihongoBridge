export default function Soundfile() {
  const container = document.createElement("div");
  const className = "w-44 h-44 border border-dashed flex flex-col";
  container.setAttribute(
    "id",
    "vocabulary-bank--eng--add-new-word-input-fields--sound-file-drag-and-drop-zone"
  );
  container.setAttribute("class", className);
  container.setAttribute("title", "Sound File");

  //* drag and drop
  const dragAndDropContainer = document.createElement("div");
  const className2 =
    "w-full h-28 bg-pink-4000 flex flex-col items-center justify-center text-white font-medium";
  dragAndDropContainer.setAttribute("class", className2);

  const text = document.createElement("sapn");
  text.textContent = "Drag & Drop";
  const text2 = document.createElement("sapn");
  text2.textContent = "Or";
  dragAndDropContainer.append(text, text2);

  const browseFilebtn = document.createElement("button");
  const className3 =
    "px-2 py-1 text-[hsl(212,12%,50%)] border border-[hsl(216,28%,20%)] bg-[hsl(216,28%,7%)] hover:border-[hsl(216,28%,30%)] transition-colors hover:text-[hsl(212,12%,80%)] mx-auto";

  browseFilebtn.setAttribute("class", className3);
  browseFilebtn.textContent = "Browse File";

  container.append(dragAndDropContainer, browseFilebtn);

  // ------------------

  browseFilebtn.addEventListener("click", async () => {
    const filePath = await window.api.openFileDialog();
    if (filePath) {
      console.log("File selected:", filePath);
      // Store the filePath in a variable to use when the form is submitted
      container.dataset.droppedFilePath = filePath;
    }
  });

  // this is not good for pref
  // Highlight the drop zone when a file is dragged over it
  container.addEventListener("dragover", (event) => {
    event.preventDefault(); // Prevent the default behavior
    container.classList.add("border-green-600"); // Add a class to highlight the drop zone
  });
  // Remove the highlight when the dragged file leaves the drop zone
  container.addEventListener("dragleave", (event) => {
    event.preventDefault();
    container.classList.remove("border-green-600"); // Remove the highlight class
  });

  //
  //

  // Handle the file drop
  let droppedFilePath: any;
  container.addEventListener("drop", (event) => {
    event.preventDefault();
    container.classList.remove("border-green-600"); // Remove the highlight class

    // Check if the dropped item is a file and is an MP3
    const files = event.dataTransfer.files;
    if (files.length > 0 && files[0].type === "audio/mpeg") {
      droppedFilePath = files[0].path; // Store the file path
      container.dataset.droppedFilePath = droppedFilePath;
      console.log("File dropped:", files[0].path);
      // Optionally, display the file name in the drop zone or in a list
      text.textContent = `File ready for upload: ${files[0].name}`;
    } else {
      // If the file is not an MP3, inform the user
      text.textContent = "Please drop an MP3 file.";
    }
  });

  return container;
}
