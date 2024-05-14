import FolderCard from "./FolderCard/_FolderCard";
import WordCard from "./WordCard/_WordCard";

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
  const className =
    "relative flex flex-wrap justify-center gap-x-4 gap-y-8 max-w-5xl mx-auto py-16 selection:text-white border0";
  English.setAttribute("class", className);

  function render(data: VocabularyData) {
    const metadate = data.metadate;
    const wordsArr = data.words;

    // for (const wordInfo of wordsArr) {
    //   English.append(WordCard(wordInfo));
    // }

    English.append(FolderCard());
  }

  window.api
    .readJsonFile("vocabulary-shop/english.json")
    .then((data: VocabularyData) => {
      render(data);
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  return English;
}

//TODO use less addEventListener
