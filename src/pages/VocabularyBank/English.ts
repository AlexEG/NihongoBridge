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

      // function countNamesSorted(array) {
      //   const countMap = {};
      //   array.forEach((obj) => {
      //     countMap[obj.word] = (countMap[obj.word] || 0) + 1;
      //   });

      //   return Object.entries(countMap)
      //     .sort((a, b) => b[1] - a[1])
      //     .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
      // }

      // const nameCounts = countNamesSorted(wordsInfo);
      // console.log(JSON.stringify(nameCounts));
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  return English;
}
