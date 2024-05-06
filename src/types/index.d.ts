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
    };
  }
}
