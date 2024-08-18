interface WordInfo {
  soundFile: string;
  word: string;
  definition: string;
  ipa_phonetic_transcription_us: string;
  ipa_phonemic_transcription_us: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
}

let currentIndex = 0;

export default function getNextQuestion(
  questionOrderType: string,
  wordsArr: string[]
) {
  let next;
  switch (questionOrderType) {
    case "random":
      next = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      break;
    case "indexOrder":
      next = wordsArr[currentIndex % wordsArr.length];
      currentIndex++;
      break;

    default:
      next = wordsArr[0];
      break;
  }
  console.log("Next Question Word:", next);
  return next;
}

// export function resetIndexOrder() {
//   currentIndex = 0;
// }
// interface WordInfo {
//   soundFile: string;
//   word: string;
//   definition: string;
//   ipa_phonetic_transcription_us: string;
//   ipa_phonemic_transcription_us: string;
//   example: string;
//   similar_words: string[];
//   syllable_division: string;
//   tags: string[];
// }

// let currentIndex = 0;

// export default function getNextQuestion(
//   questionOrderType: string,
//   wordsArr: string[]
// ) {
//   let next;
//   switch (questionOrderType) {
//     case "random":
//       next = wordsArr[Math.floor(Math.random() * wordsArr.length)];
//       window.api
//         .fetchMetadata(
//           `https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/all_vocabulary/${next}.json`
//         )
//         .then((nextWordInfo: WordInfo) => {
//           console.log("From GitHub", nextWordInfo);

//           next = nextWordInfo;
//           console.log("Next Question:", next);
//           return next;
//         })
//         .catch((error) => {
//           console.error("Error fetching metadata:", error);
//         });

//       break;
//     case "indexOrder":
//       next = wordsArr[currentIndex % wordsArr.length];
//       window.api
//         .fetchMetadata(
//           `https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/all_vocabulary/${next}.json`
//         )
//         .then((nextWordInfo: WordInfo) => {
//           console.log("From GitHub", nextWordInfo);

//           next = nextWordInfo;
//           return next;
//         })
//         .catch((error) => {
//           console.error("Error fetching metadata:", error);
//         });
//       currentIndex++;
//       break;

//     default:
//       next = wordsArr[0];
//       break;
//   }

//   // console.log("Next Question:", next);
// }

// // export function resetIndexOrder() {
// //   currentIndex = 0;
// // }
