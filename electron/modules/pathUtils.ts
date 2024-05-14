import { app } from "electron";
import * as path from "path";

export const getAppBasePath = (): string => {
  return app.getAppPath();
};

export const constructPath = (relativePath: string): string => {
  const pathParts = relativePath.split("/").filter((part) => part.length > 0);
  return path.join(getAppBasePath(), ...pathParts);
};

// Usage example in another file:
// import { constructPath } from './pathUtils';
// const fullPath = constructPath('data/vocabulary-shop/folders');
// console.log(fullPath);
