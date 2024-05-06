import { promises as fs } from "fs";
import * as path from "path";
import { app } from "electron";

interface VocabularyStats {
  practiceSessionsCount: number;
  earnedExperiencePoints: number;
  lostExperiencePoints: number;
  successfulAttempts: number;
  failedAttempts: number;
  practiceTimestamps: number[];
}

// Set a base path for the project root
const basePath = app.getAppPath();

// Use the basePath to resolve paths throughout your application
const vocabularyStatsDir = path.join(
  basePath,
  "data",
  "statistic",
  "vocabulary",
  "english"
);

async function updateVocabularyStats(
  word: string,
  wordXP: number,
  attemptPassed: boolean
): Promise<void> {
  const dirPath = path.dirname(vocabularyStatsDir);
  await fs.mkdir(dirPath, { recursive: true }); // Ensure the directory exists

  const filePath = path.join(vocabularyStatsDir, `${word}.json`);
  // console.log(`The file path is: ${filePath}`);
  let stats: VocabularyStats;

  try {
    // Try to read the existing stats file
    const data = await fs.readFile(filePath, "utf8");
    stats = JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, create a new stats object
      stats = {
        practiceSessionsCount: 0,
        earnedExperiencePoints: 0,
        lostExperiencePoints: 0,
        successfulAttempts: 0,
        failedAttempts: 0,
        practiceTimestamps: [],
      };
    } else {
      // If another error occurred, rethrow it
      throw error;
    }
  }

  // Increment the practiceSessionsCount by one
  stats.practiceSessionsCount += 1;

  // Increment the successfulAttempts or failedAttempts based on the attemptPassed input
  if (attemptPassed) {
    stats.successfulAttempts += 1;
    // Add the new earned XP to the existing earnedExperiencePoints
    stats.earnedExperiencePoints += wordXP;
  } else {
    stats.failedAttempts += 1;
    stats.lostExperiencePoints += wordXP;
  }

  // Get the current timestamp in seconds and add it to the practiceTimestamps array
  const currentTimestamp = Math.floor(Date.now() / 1000);
  stats.practiceTimestamps.push(currentTimestamp);

  // Ensure the directory exists before writing the file
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  // Save the updated stats back to the file
  try {
    await fs.writeFile(filePath, JSON.stringify(stats, null, 2), "utf8");
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

export { updateVocabularyStats };
