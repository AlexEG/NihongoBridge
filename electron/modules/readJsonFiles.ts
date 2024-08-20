import { constructPath } from "./pathUtils";
import { promises as fsPromises } from "fs";
import * as path from "path";

async function readJsonFiles(directoryPath: string): Promise<object> {
  let dataObject: { [key: string]: any } = {};
  const jsonDirectory = constructPath(`/data/${directoryPath}`);

  try {
    const files = await fsPromises.readdir(jsonDirectory);
    const jsonFiles = files.filter((file) => path.extname(file) === ".json");

    // Read files concurrently
    const readPromises = jsonFiles.map(async (file) => {
      const filePath = path.join(jsonDirectory, file);
      const fileContents = await fsPromises.readFile(filePath, "utf8");
      const key = path.basename(file, ".json");
      dataObject[key] = JSON.parse(fileContents);
    });

    await Promise.all(readPromises);
  } catch (error) {
    console.error("Error reading JSON files:", error);
  }
  // console.log("dataObject:", dataObject);

  return dataObject;
}

export { readJsonFiles };
