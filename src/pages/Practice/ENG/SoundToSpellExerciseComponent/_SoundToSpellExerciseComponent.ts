// import CustomizableQuestionNavigator from "../../CustomizableQuestionNavigator";
import TouchKeyboardInput from "../TouchKeyboardInput/_TouchKeyboardInput";
import EnableDisableTouchKeyboardInputBtn from "../TouchKeyboardInput/EnableDisableTouchKeyboardInputBtn";
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
  ipa_phonetic_transcription_us: string;
  ipa_phonemic_transcription_us: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
}

export default function SoundToSpellExerciseComponent(
  section: "english" | "japanese",
  exerciseName: string,
  answerType:
    | "word"
    | "syllableDivision"
    | "ipa_phonetic_transcription_us"
    | "ipa_phonemic_transcription_us",
  touchKeyboardCharacters: string[][]
) {
  const ExerciseComponent = document.createElement("div");
  const className = "relative flex flex-col justify-evenly border0";
  ExerciseComponent.setAttribute("class", className);
  const ECID = `practice--${section}--${exerciseName}`;
  ExerciseComponent.setAttribute("id", ECID);

  const questionOrderType = "random";

  //* ******
  function render(data: VocabularyData) {
    const metadate = data.metadate;
    const wordsArr = data.words;

    const firstQuestion = getNextQuestion(questionOrderType, wordsArr);
    console.log("firstQuestion:", firstQuestion);
    console.log(
      "ipa_phonemic_transcription_us:",
      firstQuestion.ipa_phonemic_transcription_us
    );
    console.log(
      "ipa_phonetic_transcription_us:",
      firstQuestion.ipa_phonetic_transcription_us
    );

    answerType === "word"
      ? (ExerciseComponent.dataset.correctAnswer = firstQuestion.word)
      : answerType === "syllableDivision"
        ? (ExerciseComponent.dataset.correctAnswer =
            firstQuestion.syllable_division.toLowerCase())
        : answerType === "ipa_phonemic_transcription_us"
          ? (ExerciseComponent.dataset.correctAnswer =
              firstQuestion.ipa_phonemic_transcription_us)
          : (ExerciseComponent.dataset.correctAnswer =
              firstQuestion.ipa_phonetic_transcription_us);

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
      inputAndCheckBtn,
      TouchKeyboardInput(touchKeyboardCharacters),
      EnableDisableTouchKeyboardInputBtn()
    );

    // ******************* //
    const input = inputAndCheckBtn.firstElementChild as HTMLInputElement;
    const inputPlaceholder =
      answerType === "word"
        ? "cat, water, etc..."
        : "u·biq·ui·tous , im por tant , pa-per";
    input.setAttribute("placeholder", inputPlaceholder);

    const checkBtn = inputAndCheckBtn.lastElementChild as HTMLButtonElement;

    function checkHandler() {
      console.log("checkBtn.textContent", checkBtn.textContent);

      if (checkBtn.textContent === "Check") {
        console.log("check");

        const correctAnswer = ExerciseComponent.dataset.correctAnswer;

        console.log("the correctAnswer is:", correctAnswer);

        const inputValue = input.getAttribute("value")
          ? input.getAttribute("value").toLowerCase()
          : "";

        const userAnswer =
          answerType === "word" ||
          answerType === "ipa_phonemic_transcription_us" ||
          answerType === "ipa_phonetic_transcription_us"
            ? inputValue
            : inputValue.replace(/[-_ ]/g, "·");

        if (userAnswer === correctAnswer) {
          console.log("correct answer");
          giveIndicatorCorrectWrongMessage(true);
          updateVocabStats(correctAnswer.replace(/[·]/g, ""), true);
          updateProfileStats(true);
        } else {
          console.log("wrong answer");
          giveIndicatorCorrectWrongMessage(false);
          updateVocabStats(correctAnswer.replace(/[·]/g, ""), false);
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

        answerType === "word"
          ? (ExerciseComponent.dataset.correctAnswer = nextQuestion.word)
          : answerType === "syllableDivision"
            ? (ExerciseComponent.dataset.correctAnswer =
                nextQuestion.syllable_division.toLowerCase())
            : answerType === "ipa_phonemic_transcription_us"
              ? (ExerciseComponent.dataset.correctAnswer =
                  nextQuestion.ipa_phonemic_transcription_us)
              : (ExerciseComponent.dataset.correctAnswer =
                  nextQuestion.ipa_phonetic_transcription_us);

        ExerciseComponent.dataset.soundFilePath = nextQuestion.soundFile;
        // auto play
        const audio = new Audio(nextQuestion.soundFile);
        audio.autoplay = true;
        input.focus();
      }
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        checkBtn.click();
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
        `Good try, but the correct answer is "???"`,
        `Not quite, the accurate response would be "???"`,
        `Close, but the right answer is actually "???"`,
        `Almost there! The correct answer is "???"`,
        `Nice attempt, however, "???" is correct.`,
        `That's not it, but "???" is the one.`,
        `You're on the right track, but it's "???"`,
        `Not exactly, the answer we're looking for is "???"`,
        `A valiant effort, but the answer is "???"`,
        `You've missed the mark, the correct answer is "???"`,
      ];
      wrong.lastElementChild.textContent = encouragementArray[
        Math.floor(Math.random() * 10)
      ].replace("???", correctAnswer);
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

//TODO fix bug: when existing from exercise using the EN JP local nav and entering other exercise and clicking on Enter key to Check and Continue two sounds will play in the next question

//TODO new bug with file system when updating word stats /kriˈeɪt/ it create folder with the name kriˈeɪt and in side it a file with no name that have the data
