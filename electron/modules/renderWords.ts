import Word from "../../src/components/WordsList/Word";

export async function renderWords() {
  const wordslist = document.querySelector("main#wordslist");
  try {
    const data = await window.api.readJsonFile("words.json");
    for (const word of data) {
      wordslist.append(Word(word));
      console.log(word);
    }
  } catch (err) {
    // console.error(err);
  }
}
