import WordENG from "./WordENG";
import { VocabularyData, WordInfo } from "./_types";

export default function English() {
  const English = document.createElement("div");
  const className = "relative flex flex-col justify-evenly ";
  English.setAttribute("class", className);

  // Read the JSON file and log the 'words' data
  const dataPromise = window.api.readJsonFile("vocabulary-bank/English.json");

  const wordsList: string[] = [];

  dataPromise
    .then((data: VocabularyData) => {
      const wordsInfo: WordInfo[] = data.words;

      for (const wordInfo of wordsInfo) {
        wordsList.push(wordInfo.word);
        console.count("word");
        English.append(WordENG(wordInfo));
      }
      console.log("wordsList:", wordsList);
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  return English;
}
