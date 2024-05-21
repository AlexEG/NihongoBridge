import { app, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
import fs from "fs";
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // transparent: true,
    // frame: false,
    icon: "nihongobridgeicon2.png",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#00000000",
      symbolColor: "#ffffffcc",
    },
    width: 1280,
    height: 960,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// -------------------

import { readJsonFile } from "./modules/jsonReader";
import { updateVocabularyStats } from "./modules/updateVocabularyStats";
import { updateProfileStats } from "./modules/updateProfileStats";
import { addNewWordToVocabularyBank } from "./modules/addNewWordToVocabularyBank";
import { readJsonFiles } from "./modules/readJsonFiles";
import { fetchMetadata } from "./modules/MetadataFetcher";
import { addNewWordToVocabularyBankWordList } from "./modules/addNewWordToVocabularyBankWordList";

ipcMain.handle("read-json-file", async (event, fileName) => {
  try {
    // console.count("readJsonFile from main");

    const data = await readJsonFile(fileName);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

ipcMain.handle(
  "update-vocab-stats",
  async (event, word: string, wordXP: number, attemptPassed: boolean) => {
    try {
      await updateVocabularyStats(word, wordXP, attemptPassed);
      return {
        status: "success",
        message: "Vocabulary stats updated successfully.",
      };
    } catch (error) {
      console.error("Error updating vocabulary stats:", error);
      return { status: "error", message: "Failed to update vocabulary stats." };
    }
  }
);

ipcMain.handle(
  "update-profile-stats",
  async (event, wordXP: number, attemptPassed: boolean) => {
    try {
      await updateProfileStats(wordXP, attemptPassed);
      return {
        status: "success",
        message: "Profile stats updated successfully.",
      };
    } catch (error) {
      console.error("Error updating Profile stats:", error);
      return { status: "error", message: "Failed to update Profile stats." };
    }
  }
);

//* drag & drop mp3 file VocabularyBank

ipcMain.handle("process-file", async (event, { filePath, fileName }) => {
  console.log(`Received file path: ${filePath}`); // Log the received file path
  const newPath = path.join("data/sound/english/words", `${fileName}.mp3`);
  console.log(`New file path: ${newPath}`); // Log the new file path

  try {
    await fs.promises.rename(filePath, newPath);
    console.log(`MP3 file saved as ${newPath}`);
    return { status: "success", message: "File processed successfully." };
  } catch (err) {
    console.error("Error moving file:", err);
    return { status: "error", message: err.message };
  }
});

ipcMain.handle("open-file-dialog", async (event) => {
  const result = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "Audio", extensions: ["mp3"] }],
  });
  if (result.canceled) {
    return;
  } else {
    return result.filePaths[0];
  }
});

ipcMain.handle("read-json-files", async (event, directoryPath) => {
  try {
    const data = await readJsonFiles(directoryPath);
    // console.log("from Main", data);
    return data;
  } catch (error) {
    console.error("Failed to read JSON files:", error);
  }
});

ipcMain.handle("fetch-metadata", async (event, url) => {
  return fetchMetadata(url);
});

ipcMain.handle(
  "add-new-word-to-vocabulary-bank-word-list",
  async (event, newWord: string) => {
    await addNewWordToVocabularyBankWordList(newWord);
  }
);
ipcMain.handle(
  "add-new-word-to-vocabulary-bank",
  async (
    event,
    is_audio_file_available: boolean,
    word: string,
    definition: string,
    ipa_phonetic_transcription_us: string,
    ipa_phonemic_transcription_us: string,
    example: string,
    similar_words: string[],
    syllable_division: string,
    tags: string[]
  ) => {
    try {
      await addNewWordToVocabularyBank(
        is_audio_file_available,
        word,
        definition,
        ipa_phonetic_transcription_us,
        ipa_phonemic_transcription_us,
        example,
        similar_words,
        syllable_division,
        tags
      );
    } catch (error) {
      console.error("Error updating Profile stats:", error);
    }
  }
);
