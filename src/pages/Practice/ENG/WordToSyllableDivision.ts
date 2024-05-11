import ExerciseComponent from "./ExerciseComponent/_ExerciseComponent";

export default function WordToSyllableDivision(wordsArr: any) {
  const WordToSyllableDivision = ExerciseComponent(
    "english",
    "word-to-syllable-division",
    "soundToSpell",
    wordsArr
  );

  return WordToSyllableDivision;
}
