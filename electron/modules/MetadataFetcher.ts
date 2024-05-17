import * as https from "https";

const metadataUrl =
  "https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/metadata.json";

export function fetchMetadata(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            const metadata = JSON.parse(data);
            resolve(metadata); // Resolve the promise with the metadata
          } catch (e) {
            reject(e); // Reject the promise if an error occurs
          }
        });
      })
      .on("error", (err) => {
        reject(err); // Reject the promise on request error
      });
  });
}

// import * as https from "https";

// const metadataUrl =
//   "https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/metadata.json";

// export function fetchMetadata(): void {
//   https
//     .get(metadataUrl, (res) => {
//       let data = "";

//       res.on("data", (chunk) => {
//         data += chunk;
//       });

//       res.on("end", () => {
//         try {
//           const metadata = JSON.parse(data);
//           console.log(metadata);
//           // You can now compare versions and decide whether to download new files
//         } catch (e) {
//           console.error(e.message);
//         }
//       });
//     })
//     .on("error", (err) => {
//       console.error("Error: " + err.message);
//     });

// }
