import { promises as fs } from "fs";
import * as path from "path";
import { app } from "electron";

const basePath = app.getAppPath();

const vocabularyBankDir = path.join(basePath, "data", "vocabulary-bank");

async function addNewWordToVocabularyBankWordList(
  newWord: string
): Promise<void> {
  const dirPath = path.dirname(vocabularyBankDir);
  await fs.mkdir(dirPath, { recursive: true }); // Ensure the directory exists

  const filePath = path.join(
    vocabularyBankDir,
    "english-vocabulary-bank-word-list.json"
  );
  // console.log(`The file path is: ${filePath}`);
  let VocabularyBankWordList: string[];

  try {
    // Try to read the existing file
    const data = await fs.readFile(filePath, "utf8");
    VocabularyBankWordList = JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, create a new stats object
      VocabularyBankWordList = [];
    } else {
      // If another error occurred, rethrow it
      throw error;
    }
  }

  VocabularyBankWordList.push(newWord);

  // Ensure the directory exists before writing the file
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  // Save the updated stats back to the file
  try {
    await fs.writeFile(
      filePath,
      JSON.stringify(VocabularyBankWordList, null, 2),
      "utf8"
    );
    // console.log("File written successfully");
  } catch (err) {
    console.error("Error writing file:", err);
  }

  // After writing the file, check if it exists
  // fs.stat(filePath, (err, stats) => {
  //   if (err) {
  //     console.error("Error checking file:", err);
  //   } else {
  //     console.log(`File exists, size: ${stats.size} bytes`);
  //   }
  // });
}

export { addNewWordToVocabularyBankWordList };

//TODO Sound file
