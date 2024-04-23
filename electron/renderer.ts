/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "../src/index.css";
import TitleBar from "../src/components/TitleBar";
import NavigationSidebar from "../src/components/NavigationSidebar";
import WordsList from "../src/components/WordsList";
import Word from "../src/components/WordsList/Word";

console.log(
  '👋 This message is being logged by "renderer.ts", included via Vite'
);

const ROOT = document.querySelector("div#root");

ROOT.append(TitleBar());
ROOT.append(NavigationSidebar());
ROOT.append(WordsList());

// window.api
//   .readJsonFile("data/words.json")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function renderWords() {
  const wordslist = document.querySelector("main#wordslist");
  try {
    const data = await window.api.readJsonFile("data/words.json");
    for (const word of data) {
      wordslist.append(Word(word));
      // console.log(key);
    }
  } catch (err) {
    console.error(err);
  }
}

renderWords();
