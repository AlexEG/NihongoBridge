import { constructPath } from "./pathUtils";
import { promises as fsPromises } from "fs";
import * as path from "path";

async function readJsonFiles(directoryPath: string): Promise<object> {
  let dataObject: { [key: string]: any } = {};
  const jsonDirectory = constructPath(`/data/${directoryPath}`);

  try {
    const files = await fsPromises.readdir(jsonDirectory);
    for (const file of files) {
      if (path.extname(file) === ".json") {
        const filePath = path.join(jsonDirectory, file);
        const fileContents = await fsPromises.readFile(filePath, "utf8");
        dataObject[file] = JSON.parse(fileContents);
      }
    }
  } catch (error) {
    console.error("Error reading JSON files:", error);
  }
  console.log("dataObject:", dataObject);

  return dataObject;
}

export { readJsonFiles };
