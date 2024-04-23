// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  readJsonFile: (fileName: string) =>
    ipcRenderer.invoke("read-json-file", fileName),
});

// import { readJsonFile } from "./modules/jsonReader";
// readJsonFile("data/words.json")
//   .then((jsonData) => {
//     console.log(jsonData);
//   })
//   .catch((err) => {
//     console.error("An error occurred:", err);
//   });
