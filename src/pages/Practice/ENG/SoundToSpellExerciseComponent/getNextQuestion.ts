interface WordInfo {
  soundFile: string;
  word: string;
  definition: string;
  ipa_phonetic_transcription_us: string;
  ipa_phonemic_transcription_us: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
}

export default function getNextQuestion(
  questionOrderType: string,
  wordsArr: WordInfo[]
) {
  let next;

  switch (questionOrderType) {
    case "random":
      next = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      break;

    default:
      next = wordsArr[0];
      break;
  }

  return next;
}
