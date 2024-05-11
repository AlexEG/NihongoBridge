// import CustomizableQuestionNavigator from "../../CustomizableQuestionNavigator";
import getNextQuestion from "./getNextQuestion";
import IndicatorCorrectWrong from "./IndicatorCorrectWrong";
import InputAndCheckBtn from "./InputAndCheckBtn";
import PlaySoundBtn from "./PlaySoundBtn";
interface VocabularyData {
  metadate: { number_of_words: number };
  words: WordInfo[];
}

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

export default function ExerciseComponent(
  section: "english" | "japanese",
  exerciseName: string,
  exerciseType:
    | "soundToSpell"
    | "soundToOptions"
    | "textToSpell"
    | "textToOptions"
) {
  const ExerciseComponent = document.createElement("div");
  const className = "relative flex flex-col justify-evenly border0";
  ExerciseComponent.setAttribute("class", className);
  const ECID = `practice--${section}--${exerciseName}`;
  ExerciseComponent.setAttribute("id", ECID);
  ExerciseComponent.dataset.correctAnswer = "";

  const questionOrderType = "random";

  // console.log(firstQuestion);

  //* ******
  function render(data: VocabularyData) {
    const metadate = data.metadate;
    const wordsArr = data.words;

    const firstQuestion = getNextQuestion(questionOrderType, wordsArr);
    ExerciseComponent.dataset.correctAnswer = firstQuestion.word;
    ExerciseComponent.dataset.soundFilePath = firstQuestion.soundFile;
    ExerciseComponent.dataset.questionOrderType = questionOrderType;

    // auto play
    const audio = new Audio(ExerciseComponent.dataset.soundFilePath);
    audio.autoplay = true;

    const inputAndCheckBtn = InputAndCheckBtn(ECID);
    ExerciseComponent.append(
      // CustomizableQuestionNavigator(),
      //* sound
      soundBtnsWrapper(),
      IndicatorCorrectWrong(ECID),
      inputAndCheckBtn
    );

    // ******************* //
    const input = inputAndCheckBtn.firstElementChild as HTMLInputElement;
    const checkBtn = inputAndCheckBtn.lastElementChild;

    function checkHandler() {
      console.log("checkBtn.textContent", checkBtn.textContent);

      if (checkBtn.textContent === "Check") {
        console.log("check");

        const correctAnswer = ExerciseComponent.dataset.correctAnswer;
        console.log("the correctAnswer is:", correctAnswer);

        if (input.getAttribute("value") === correctAnswer) {
          console.log("correct answer");
          giveIndicatorCorrectWrongMessage(true);
          updateVocabStats(correctAnswer, true);
          updateProfileStats(true);
        } else {
          console.log("wrong answer");
          giveIndicatorCorrectWrongMessage(false);
          updateVocabStats(correctAnswer, false);
          updateProfileStats(false);
        }

        checkBtn.textContent = "Continue";
        input.setAttribute("disabled", "");
      } else {
        input.value = "";
        input.setAttribute("value", "");
        hideIndicatorCorrectWrongMessage();
        checkBtn.textContent = "Check";
        input.removeAttribute("disabled");

        // get next question data
        const questionOrderType = ExerciseComponent.dataset.questionOrderType;
        const nextQuestion = getNextQuestion(questionOrderType, wordsArr);
        ExerciseComponent.dataset.correctAnswer = nextQuestion.word;
        ExerciseComponent.dataset.soundFilePath = nextQuestion.soundFile;
        // auto play
        const audio = new Audio(nextQuestion.soundFile);
        audio.autoplay = true;
        input.focus();
      }
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkHandler();
      }
    });
    checkBtn.addEventListener("click", checkHandler);
  }
  //* ******

  //

  //* ******
  function giveIndicatorCorrectWrongMessage(isCorrect: boolean) {
    const correct =
      ExerciseComponent.firstElementChild.nextElementSibling.firstElementChild;
    const wrong =
      ExerciseComponent.firstElementChild.nextElementSibling.lastElementChild;

    if (isCorrect) {
      // console.log("correct answer");
      correct.classList.replace("hidden", "flex");
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

      correct.lastElementChild.textContent =
        congratulationsArray[Math.floor(Math.random() * 10)];
    } else {
      // console.log("wrong answer");
      wrong.classList.replace("hidden", "flex");
      const correctAnswer = ExerciseComponent.dataset.correctAnswer;
      const encouragementArray = [
        "Good try, but the correct answer is 000",
        "Not quite, the accurate response would be 000",
        "Close, but the right answer is actually 000",
        "Almost there! The correct answer is 000",
        "Nice attempt, however, 000 is correct.",
        "That's not it, but 000 is the one.",
        "You're on the right track, but it's 000",
        "Not exactly, the answer we're looking for is 000",
        "A valiant effort, but the answer is 000",
        "You've missed the mark, the correct answer is 000",
      ];
      wrong.lastElementChild.textContent = encouragementArray[
        Math.floor(Math.random() * 10)
      ].replace("000", correctAnswer);
    }
  }
  //* ******

  //

  //* ******
  function hideIndicatorCorrectWrongMessage() {
    console.log("hide");
    const correct =
      ExerciseComponent.firstElementChild.nextElementSibling.firstElementChild;
    const wrong =
      ExerciseComponent.firstElementChild.nextElementSibling.lastElementChild;

    if (correct.classList.contains("flex"))
      correct.classList.replace("flex", "hidden");
    if (wrong.classList.contains("flex"))
      wrong.classList.replace("flex", "hidden");
  }
  //* ******

  //

  // *************** //
  window.api
    .readJsonFile(`vocabulary-bank/${section}.json`)
    .then((data: VocabularyData) => {
      render(data);
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });
  // *************** //
  return ExerciseComponent;
}

function soundBtnsWrapper() {
  const normalSlowSpeedWrapper = document.createElement("div");
  normalSlowSpeedWrapper.setAttribute(
    "class",
    "flex gap-x-2 justify-center items-end mt-12"
  );
  normalSlowSpeedWrapper.append(
    PlaySoundBtn("large", "1"),
    PlaySoundBtn("small", "0.6")
  );
  return normalSlowSpeedWrapper;
}

//

//* ******
function updateVocabStats(word: string, attemptPassed: boolean) {
  window.api
    .updateVocabStats(word, 10, attemptPassed)
    .then((response: { status: string; message: string }) => {
      console.log(response); // Handle the response from the main process
    })
    .catch((error: Error) => {
      console.error(error); // Handle any errors that occur
    });
}
//* ******

//

//* ******
function updateProfileStats(attemptPassed: boolean) {
  window.api
    .updateProfileStats(10, attemptPassed)
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
    ? +titlebarTotalXp.textContent + 10
    : +titlebarTotalXp.textContent - 10;

  // console.log("newXp", newXp);
  titlebarTotalXp.innerText = newXp.toString();
}

//* ******
