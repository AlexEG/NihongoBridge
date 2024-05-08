export {};

declare global {
  interface Window {
    api: {
      readJsonFile: (fileName: string) => Promise<any>;
      updateVocabStats: (
        word: string,
        wordXP: number,
        attemptPassed: boolean
      ) => Promise<any>;
      updateProfileStats: (
        wordXP: number,
        attemptPassed: boolean
      ) => Promise<any>;
      addNewWordToVocabularyBank: (
        word: string,
        definition: string,
        ipa_us: string,
        example: string,
        similar_words: string,
        syllable_division: string,
        tags: string
      ) => Promise<any>;
    };
  }
}
