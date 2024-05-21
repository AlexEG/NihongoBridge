import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import { constructPath } from "./pathUtils";

export function downloadAudioFile(audioFileURL: string): void {
  const request = https.get(audioFileURL, (response) => {
    // Check if the request was successful
    if (response.statusCode === 200) {
      const fullPath = constructPath(
        `data/sound/english/words/${audioFileURL.split("/").pop()}`
      );
      const file = fs.createWriteStream(fullPath);

      // console.log("audioFilePath", file);
      response.pipe(file);

      file.on("finish", () => {
        file.close();
        // console.log("Download completed successfully.");
      });
    } else {
      console.error(`Failed to download file: ${response.statusCode}`);
    }
  });

  request.on("error", (error) => {
    console.error(
      `Error occurred while downloading the file: ${error.message}`
    );
  });
}
