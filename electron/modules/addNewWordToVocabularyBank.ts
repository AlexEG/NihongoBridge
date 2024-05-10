import { promises as fs } from "fs";
import * as path from "path";
import { app } from "electron";

interface VocabularyBankData {
  metadate: { number_of_words: number };
  words: WordInfo[];
}

interface WordInfo {
  soundFile: string;
  word: string;
  definition: string;
  ipa_us: string;
  ipa_uk: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
}

const basePath = app.getAppPath();

const vocabularyBankDir = path.join(basePath, "data", "vocabulary-bank");

async function addNewWordToVocabularyBank(
  word: string,
  definition: string,
  ipa_us: string,
  example: string,
  similar_words: string,
  syllable_division: string,
  tags: string
): Promise<void> {
  const dirPath = path.dirname(vocabularyBankDir);
  await fs.mkdir(dirPath, { recursive: true }); // Ensure the directory exists

  const filePath = path.join(vocabularyBankDir, "English.json");
  // console.log(`The file path is: ${filePath}`);
  let VocabularyBank: VocabularyBankData;

  try {
    // Try to read the existing file
    const data = await fs.readFile(filePath, "utf8");
    VocabularyBank = JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, create a new stats object
      VocabularyBank = {
        metadate: { number_of_words: 0 },
        words: [],
      };
    } else {
      // If another error occurred, rethrow it
      throw error;
    }
  }

  const newWord: WordInfo = {
    word: word,
    soundFile: `/data/sound/${word}.mp3`,
    definition: definition,
    ipa_us: ipa_us,
    ipa_uk: "???",
    example: example,
    similar_words: similar_words.split(",").map((w) => w.trim()),
    syllable_division: syllable_division,
    tags: tags.split(",").map((w) => w.trim()),
  };

  VocabularyBank.metadate.number_of_words += 1;
  VocabularyBank.words.push(newWord);

  // Ensure the directory exists before writing the file
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  // Save the updated stats back to the file
  try {
    await fs.writeFile(
      filePath,
      JSON.stringify(VocabularyBank, null, 2),
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

export { addNewWordToVocabularyBank };
