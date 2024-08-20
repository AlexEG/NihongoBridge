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
import TitleBar from "../src/layout/TitleBar/TitleBar";
import NavigationSidebar from "../src/layout/NavigationSidebar/_NavigationSidebar";
import WordsList from "../src/components/WordsList";
import Word from "../src/components/WordsList/Word";
import { renderWords } from "./modules/renderWords";
import IPA from "../src/pages/IPA/_IPA";
import VocabularyBank from "../src/pages/VocabularyBank/_VocabularyBank";
import Practice from "../src/pages/Practice/_Practice";
import Home from "../src/pages/Home/_Home";
// import VocabularyShop from "../src/pages/VocabularyShop/_VocabularyShop";

const ROOT = document.querySelector("div#root");

ROOT.append(TitleBar());
ROOT.append(NavigationSidebar());
// ROOT.append(WordsList());
// ROOT.append(Home());
// ROOT.append(IPA());
// ROOT.append(VocabularyBank());
ROOT.append(Practice());
// ROOT.append(VocabularyShop());

// renderWords();

// const synth = window.speechSynthesis;
// const utterThis = new SpeechSynthesisUtterance("Hello, world!");
// synth.speak(utterThis);

// const synth = window.speechSynthesis;
// const utterThis = new SpeechSynthesisUtterance("English");

// // Set the voice (optional)
// const voices = synth.getVoices();
// utterThis.voice = voices.find(
//   (voice) => voice.name === "Microsoft Zira - English (United States)"
// );
// // utterThis.voice = voices.find((voice) => voice.name === "Google US English"); // Change to desired voice name

// // Set the rate (speed) and pitch (optional)
// utterThis.rate = 2; // Speed (0.1 to 10)
// utterThis.pitch = 0.7; // Pitch (0 to 2)

// synth.speak(utterThis);

// // function listVoices() {
// //   const voices = synth.getVoices();
// //   voices.forEach((voice, index) => {
// //     console.log(`${index + 1}: ${voice.name} (${voice.lang})`);
// //   });
// //   console.log("from renderer.ts");
// // }

// // listVoices();

// // const synth = window.speechSynthesis;

// function listVoices() {
//   const voices = synth.getVoices();
//   if (voices.length === 0) {
//     console.log("No voices available. Please try again.");
//   } else {
//     voices.forEach((voice, index) => {
//       console.log(`${index + 1}: ${voice.name} (${voice.lang})`);
//     });
//   }
// }

// // Ensure voices are loaded before listing them
// if (synth.onvoiceschanged !== undefined) {
//   synth.onvoiceschanged = listVoices;
// } else {
//   listVoices();
// }

////////////////////////////

const synth = window.speechSynthesis;

function speak(
  text: string,
  voiceName: string,
  rate: number = 1,
  pitch: number = 1
) {
  const utterThis = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();
  const selectedVoice = voices.find((voice) => voice.name === voiceName);

  if (selectedVoice) {
    utterThis.voice = selectedVoice;
  } else {
    console.warn(`Voice "${voiceName}" not found.`);
  }

  utterThis.rate = rate;
  utterThis.pitch = pitch;
  synth.speak(utterThis);
}

function listVoices() {
  const voices = synth.getVoices();
  if (voices.length === 0) {
    console.log("No voices available. Please try again.");
  } else {
    voices.forEach((voice, index) => {
      console.log(`${index + 1}: ${voice.name} (${voice.lang})`);
    });
  }
}

// // Ensure voices are loaded before listing them and speaking
// if (synth.onvoiceschanged !== undefined) {
//   synth.onvoiceschanged = () => {
//     listVoices();
//     speak("Hello, world!", "Microsoft Ayumi - Japanese (Japan)", 1.2, 1);
//   };
// } else {
//   listVoices();
//   speak("Hello, world!", "Microsoft Zira - English (United States)", 1.2, 1);
// }
