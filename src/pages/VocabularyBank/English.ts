import WordENG from "./WordENG";

interface VocabularyData {
  metadate: { number_of_words: number };
  words: WordInfo[];
}

interface WordInfo {
  soundFile: string;
  word: string;
  definition: string;
  ipa_us: string;
  ipa_uk: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
  difficultyLevel: number;
}

export default function English() {
  const English = document.createElement("div");
  const className = "relative flex flex-col justify-evenly ";
  English.setAttribute("class", className);

  // Read the JSON file and log the 'words' data
  const dataPromise = window.api.readJsonFile("vocabulary-bank/English.json");

  // const wordsList: string[] = [];

  dataPromise
    .then((data: VocabularyData) => {
      const wordsInfo: WordInfo[] = data.words;

      for (const wordInfo of wordsInfo) {
        // wordsList.push(wordInfo.word);
        English.append(WordENG(wordInfo));
      }
      // console.log(
      //   `wordsList (${wordsList.length}):`,
      //   JSON.stringify(wordsList)
      // );
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  return English;
}
