// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  readJsonFile: (fileName: string) =>
    ipcRenderer.invoke("read-json-file", fileName),
  updateVocabStats: (word: string, wordXP: number, attemptPassed: boolean) =>
    ipcRenderer.invoke("update-vocab-stats", word, wordXP, attemptPassed),
  updateProfileStats: (wordXP: number, attemptPassed: boolean) =>
    ipcRenderer.invoke("update-profile-stats", wordXP, attemptPassed),
  addNewWordToVocabularyBank: (
    word: string,
    definition: string,
    ipa_us: string,
    example: string,
    similar_words: string,
    syllable_division: string,
    tags: string
  ) =>
    ipcRenderer.invoke(
      "add-new-word-to-vocabulary-bank",
      word,
      definition,
      ipa_us,
      example,
      similar_words,
      syllable_division,
      tags
    ),
});
