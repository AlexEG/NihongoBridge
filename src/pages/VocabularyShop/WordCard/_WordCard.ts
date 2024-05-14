import AddToVocabulayBankBtn from "./AddToVocabulayBankBtn";
import PlaySoundBtn from "./PlaySoundBtn";

type WordInfo = {
  soundFile: string;
  definition: string;
  ipa_phonetic_transcription_us: string;
  ipa_phonemic_transcription_us: string;
  example: string;
  similar_words: string[];
  syllable_division: string;
  tags: string[];
};

export default function WordCard(word: string, wordInfo: WordInfo) {
  const WordCard = document.createElement("div");
  const className =
    "h-44 w-44 border border-[hsl(212,12%,21%)] hover:border-[hsl(212,12%,81%)] transition-colors relative";
  WordCard.setAttribute("class", className);

  // ******* //
  const SoundBtnAndAddToVocabulayBankBtnWrapper = document.createElement("div");
  const className2 =
    "absolute bottom-1 right-1 flex justify-end gap-x-1 items-center border0 mt-auto";
  SoundBtnAndAddToVocabulayBankBtnWrapper.setAttribute("class", className2);
  SoundBtnAndAddToVocabulayBankBtnWrapper.append(
    PlaySoundBtn(wordInfo.soundFile),
    AddToVocabulayBankBtn()
  );

  WordCard.append(
    wordTitle(word),
    wordDefinition(wordInfo.definition),
    SoundBtnAndAddToVocabulayBankBtnWrapper
  );
  return WordCard;
}

function wordTitle(text: string) {
  const wordTitle = document.createElement("p");
  wordTitle.textContent = text;
  const className =
    "text-white text-center font-semibold py-2 truncate border0";
  wordTitle.setAttribute("class", className);

  return wordTitle;
}
function wordDefinition(text: string) {
  const wordTitle = document.createElement("p");
  wordTitle.textContent = text;
  const className =
    "text-white/50 text-xs px-2 text-justify whitespace-normal overflow-hidden h-20 ";
  wordTitle.setAttribute("class", className);

  return wordTitle;
}
