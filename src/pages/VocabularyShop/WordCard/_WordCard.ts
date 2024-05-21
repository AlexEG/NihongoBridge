import AddToVocabulayBankBtn from "./AddToVocabulayBankBtn";
import PlaySoundBtn from "./PlaySoundBtn";

type WordInfo = {
  is_audio_file_available: boolean;
  definition: string;
};

export default function WordCard(
  word: string,
  wordInfo: WordInfo,
  isInVocabularyBank: boolean
) {
  const WordCard = document.createElement("div");
  const className =
    "h-44 w-44 border border-[hsl(212,12%,21%)] hover:border-[hsl(212,12%,81%)] transition-colors relative";
  WordCard.setAttribute("class", className);
  WordCard.dataset.isInVocabularyBank = `${isInVocabularyBank}`;

  // ******* //
  const SoundBtnAndAddToVocabulayBankBtnWrapper = document.createElement("div");
  const className2 =
    "absolute bottom-1 right-1 flex justify-end gap-x-1 items-center border0 mt-auto";
  SoundBtnAndAddToVocabulayBankBtnWrapper.setAttribute("class", className2);

  // check if the word is in
  SoundBtnAndAddToVocabulayBankBtnWrapper.append(
    PlaySoundBtn(word, wordInfo.is_audio_file_available),
    AddToVocabulayBankBtn(
      isInVocabularyBank,
      word,
      wordInfo.is_audio_file_available
    )
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
    "text-white text-center font-semibold py-2 truncate border0 selection:bg-white/20";
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

//TODO
// after getting the metadata for the folder [word, is_audio_file_available, definition] in one big file
// each word card have a button to add the word to your vocabulary bank
// when the user click fetch the json file for that word example "https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/all_vocabulary/about.json"
// and just add it to vocabulary-bank/english.json
// if the metadata is_audio_file_available true download the sound file else just add "/data/sound/nosound.mp3" for the audio path
