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
}

export default function submitAndValidationClickHandler(
  userInput: string,
  questionOrderType: string,
  wordsArr: WordInfo[]
) {
  const LexiconTypist = document.querySelector(
    "#practice--eng---listen-and-spell"
  ) as HTMLElement;
  const previousCorrectWord = LexiconTypist.dataset.correctAnswer;

  // on the first click check the answer and the change the submit btn text to next
  // then when next clicked get the next question and render it
  const submitBtn = document.querySelector(
    "#practice--eng---listen-and-spell--submit-btn"
  ) as HTMLButtonElement;
  const correctAnswerIndicator = document.querySelector(
    "#practice--eng---listen-and-spell--indicator-correct"
  );
  const wrongAnswerIndicator = document.querySelector(
    "#practice--eng---listen-and-spell--indicator-wrong"
  );

  const input = document.querySelector(
    "#practice--eng---listen-and-spell--input"
  ) as HTMLInputElement;

  if (submitBtn.textContent === "submit") {
    submitBtn.textContent = "next";

    // Validation and xp statistic stuff
    if (userInput.toLowerCase() === previousCorrectWord) {
      console.log("correct answer");
      correctAnswerIndicator.classList.replace("hidden", "flex");
      const congratulationsArray = [
        "Bravo!",
        "Excellent!",
        "Superb!",
        "Well-done!",
        "Remarkable!",
        "Outstanding!",
        "Impressive!",
        "Splendid!",
        "Marvelous!",
        "Kudos!",
      ];

      correctAnswerIndicator.querySelector("span").textContent =
        congratulationsArray[
          Math.floor(Math.random() * congratulationsArray.length)
        ];
      input.setAttribute("disabled", "");
    } else {
      console.log("wrong answer");
      wrongAnswerIndicator.classList.replace("hidden", "flex");
      const encouragementArray = [
        "Good try, but the correct answer is ",
        "Not quite, the accurate response would be ",
        "Close, but the right answer is actually ",
        "Almost there! The correct answer is ",
        "Nice attempt, however,  is correct.",
        "That's not it, but  is the one.",
        "You're on the right track, but it's ",
        "Not exactly, the answer we're looking for is ",
        "A valiant effort, but the answer is ",
        "You've missed the mark, the correct answer is ",
      ];

      wrongAnswerIndicator.querySelector("span").textContent = `
        ${
          encouragementArray[
            Math.floor(Math.random() * encouragementArray.length)
          ]
        } "${previousCorrectWord}"`;

      input.setAttribute("disabled", "");
    }
  } else {
    submitBtn.textContent = "submit";
    correctAnswerIndicator.classList.replace("flex", "hidden");
    wrongAnswerIndicator.classList.replace("flex", "hidden");

    // get the next question
    const nextQuestion = getNextQuestion(questionOrderType, wordsArr);
    //* sound file

    // new correctAnswer
    LexiconTypist.dataset.correctAnswer = nextQuestion.word.toLowerCase();
    console.log("Cheat correctAnswer:", nextQuestion.word);
    console.log("Cheat word:", nextQuestion);
    // new sound file path
    LexiconTypist.dataset.soundFilePath = nextQuestion.soundFile;

    // clear input
    input.value = "";
    input.removeAttribute("disabled");

    const attemptPassed = userInput.toLowerCase() === previousCorrectWord;

    const wordXP = 10;

    // Call the updateVocabStats function via window.api
    window.api
      .updateVocabStats(previousCorrectWord, wordXP, attemptPassed)
      .then((response: { status: string; message: string }) => {
        console.log(response); // Handle the response from the main process
      })
      .catch((error: Error) => {
        console.error(error); // Handle any errors that occur
      });

    window.api
      .updateProfileStats(wordXP, attemptPassed)
      .then((response: { status: string; message: string }) => {
        console.log(response); // Handle the response from the main process
      })
      .catch((error: Error) => {
        console.error(error); // Handle any errors that occur
      });

    const titlebarTotalXp = document.querySelector(
      "#layout--title-bar-total-xp > span:first-child"
    ) as HTMLSpanElement;

    // console.log("titlebarTotalXp", titlebarTotalXp);
    const newXp = attemptPassed
      ? +titlebarTotalXp.textContent + wordXP
      : +titlebarTotalXp.textContent - wordXP;

    // console.log("newXp", newXp);
    titlebarTotalXp.innerText = newXp.toString();
  }
}
