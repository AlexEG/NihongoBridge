import { promises as fs } from "fs";
import * as path from "path";
import { app } from "electron";

interface ProfileStats {
  xp: number;
}

// Set a base path for the project root
const basePath = app.getAppPath();

// Use the basePath to resolve paths throughout your application
const ProfileStatsDir = path.join(basePath, "data");

async function updateProfileStats(
  wordXP: number,
  attemptPassed: boolean
): Promise<void> {
  const dirPath = path.dirname(ProfileStatsDir);
  await fs.mkdir(dirPath, { recursive: true }); // Ensure the directory exists

  const filePath = path.join(ProfileStatsDir, "profile.json");
  // console.log(`The file path is: ${filePath}`);
  let stats: ProfileStats;

  try {
    // Try to read the existing stats file
    const data = await fs.readFile(filePath, "utf8");
    stats = JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, create a new stats object
      stats = {
        xp: 0,
      };
    } else {
      // If another error occurred, rethrow it
      throw error;
    }
  }

  // Increment the successfulAttempts or failedAttempts based on the attemptPassed input
  if (attemptPassed) {
    stats.xp += wordXP;
  } else {
    stats.xp -= wordXP;
  }

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

export { updateProfileStats };
