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

/*
"water":5,"time":4,"world":3,"star":3,"space":3,"sun":3,"air":3,"ubiquitous":2,"year":2,"way":2,"day":2,"thing":2,"algorithm":2,"webpack":2,"supernova":2,"telescope":2,"universe":2,"diplomacy":2,"cloud":2,"river":2,"stone":2,"they":2,"up":2,"what":2,"which":2,"their":2,"would":2,"were":2,"these":2,
*/
