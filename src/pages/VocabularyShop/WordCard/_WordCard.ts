import AddToVocabulayBankBtn from "./AddToVocabulayBankBtn";
import PlaySoundBtn from "./PlaySoundBtn";

type WordInfo = {
  is_in_vocabulary_bank: boolean;
  soundFile: string;
  definition: string;
};

export default function WordCard(word: string, wordInfo: WordInfo) {
  const WordCard = document.createElement("div");
  const className =
    "h-44 w-44 border border-[hsl(212,12%,21%)] hover:border-[hsl(212,12%,81%)] transition-colors relative";
  WordCard.setAttribute("class", className);
  WordCard.dataset.isInVocabularyBank = `${wordInfo.is_in_vocabulary_bank}`;

  // ******* //
  const SoundBtnAndAddToVocabulayBankBtnWrapper = document.createElement("div");
  const className2 =
    "absolute bottom-1 right-1 flex justify-end gap-x-1 items-center border0 mt-auto";
  SoundBtnAndAddToVocabulayBankBtnWrapper.setAttribute("class", className2);
  SoundBtnAndAddToVocabulayBankBtnWrapper.append(
    PlaySoundBtn(wordInfo.soundFile),
    AddToVocabulayBankBtn(wordInfo.is_in_vocabulary_bank)
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
