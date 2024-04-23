// jsonReader.ts
import * as fs from "fs";
import * as path from "path";

export function readJsonFile(fileName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, `../../${fileName}`),
      "utf8",
      (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
          reject(err);
          return;
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        resolve(jsonData);
      }
    );
  });
}
