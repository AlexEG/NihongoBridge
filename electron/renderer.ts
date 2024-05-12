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
import VocabularyShop from "../src/pages/VocabularyShop/_VocabularyShop";

const ROOT = document.querySelector("div#root");

ROOT.append(TitleBar());
ROOT.append(NavigationSidebar());
// ROOT.append(WordsList());
// ROOT.append(Home());
// ROOT.append(IPA());
// ROOT.append(VocabularyBank());
ROOT.append(Practice());
// ROOT.append(VocabularyShop());

renderWords();
