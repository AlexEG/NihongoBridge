export interface VocabularyData {
  metadate: { number_of_words: number };
  words: WordInfo[];
}

export interface WordInfo {
  soundFile: string;
  word: string;
  definition: string;
  ipa_us: string;
  ipa_uk: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
}
