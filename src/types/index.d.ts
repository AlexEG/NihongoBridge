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
      processFile: (filePath: string, fileName: string) => Promise<any>;
      openFileDialog: () => Promise<string>;
      fetchMetadata(url: string): Promise<any>;
      addNewWordToVocabularyBankWordList(newWord: string): Promise<void>;
      readJsonFiles(directoryPath: string): Promise<object>;
      downloadAudioFile(audioFileURL: string): void;
      addNewWordToVocabularyBank(
        is_audio_file_available: boolean,
        word: string,
        definition: string,
        ipa_phonetic_transcription_us: string,
        ipa_phonemic_transcription_us: string,
        example: string,
        similar_words: string[],
        syllable_division: string,
        tags: string[]
      ): Promise<void>;
    };
    selectFile: () => Promise<string>;
  }
}
