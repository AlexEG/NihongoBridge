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

  // Validation and xp statistic stuff
  if (userInput.toLowerCase() === LexiconTypist.dataset.correctAnswer)
    console.log("correct");
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

  // correctAnswer
  LexiconTypist.dataset.correctAnswer = nextQuestion.word.toLowerCase();
  console.log("correctAnswer:", nextQuestion.word);

  // clear input
  const input = document.querySelector(
    "#eng--lexicon-typist--input"
  ) as HTMLInputElement;
  input.value = "";
}
