import getNextQuestion from "./getNextQuestion";
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
  difficultyLevel: number;
}

export default function submitAndValidationClickHandler(
  userInput: string,
  questionOrderType: string,
  wordsArr: WordInfo[]
) {
  const LexiconTypist = document.querySelector(
    "#eng--lexicon-typist"
  ) as HTMLElement;

  const previousCorrectWord = LexiconTypist.dataset.correctAnswer;
  const previousDifficultyLevelWord = +LexiconTypist.dataset.difficultyLevel;

  // Validation and xp statistic stuff
  if (userInput.toLowerCase() === previousCorrectWord) console.log("correct");
  else console.log("wrong");

  // get the next question
  const nextQuestion = getNextQuestion(questionOrderType, wordsArr);
  // definition
  const definition = document.querySelector(
    "#eng--lexicon-typist--definition > h1"
  ) as HTMLElement;

  // console.log("definition:", definition);
  // console.log("nextQuestion.definition:", nextQuestion.definition);
  definition.innerText = nextQuestion.definition;

  // new correctAnswer
  LexiconTypist.dataset.correctAnswer = nextQuestion.word.toLowerCase();
  console.log("correctAnswer:", nextQuestion.word);
  LexiconTypist.dataset.difficultyLevel =
    nextQuestion.difficultyLevel.toString();
  // clear input
  const input = document.querySelector(
    "#eng--lexicon-typist--input"
  ) as HTMLInputElement;
  input.value = "";

  const attemptPassed = userInput.toLowerCase() === previousCorrectWord;

  const wordXP = previousDifficultyLevelWord;

  // Call the updateVocabStats function via window.api
  window.api
    .updateVocabStats(previousCorrectWord, wordXP, attemptPassed)
    .then((response: { status: string; message: string }) => {
      console.log(response); // Handle the response from the main process
    })
    .catch((error: Error) => {
      console.error(error); // Handle any errors that occur
    });
}
