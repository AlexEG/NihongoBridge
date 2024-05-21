export default function AddToVocabulayBankBtn(
  isInVocabularyBank: boolean,
  word: string,
  is_audio_file_available: boolean
) {
  const AddToVocabulayBankBtn = document.createElement("button");
  const className = "group bg-[hsl(216,28%,7%)] p-1.5 rounded-md";
  AddToVocabulayBankBtn.setAttribute("class", className);
  AddToVocabulayBankBtn.setAttribute("title", "add to your");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");

  svg.classList.add(
    "w-5",
    "h-5",
    "opacity-40",
    "group-hover:opacity-100",
    "transition-opacity"
  );
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");

  const plusSign = "M12 4.5v15m7.5-7.5h-15";
  const checkMark =
    "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
  // console.log("isInVocabularyBank:", isInVocabularyBank);

  if (isInVocabularyBank) {
    svg.setAttribute("stroke", "#00ff00cc");
    path.setAttribute("d", checkMark);
    AddToVocabulayBankBtn.setAttribute(
      "title",
      "already in your VocabulayBank"
    );
  } else {
    svg.setAttribute("stroke", "#ffffffcc");
    AddToVocabulayBankBtn.setAttribute("title", "add to your VocabulayBank");
    path.setAttribute("d", plusSign);
    // so the already in vocabulary-bank words don't get the click handler
    AddToVocabulayBankBtn.addEventListener("click", addToVocabulayBank);
  }

  svg.append(path);
  AddToVocabulayBankBtn.append(svg);

  function addToVocabulayBank() {
    const wordCard = AddToVocabulayBankBtn.parentElement.parentElement;

    if (wordCard.dataset.isInVocabularyBank === "false") {
      // add highlight
      path.setAttribute("d", checkMark);
      svg.setAttribute("stroke", "#00ff00cc");
      AddToVocabulayBankBtn.setAttribute(
        "title",
        "already in your VocabulayBank"
      );
      wordCard.dataset.isInVocabularyBank = "true";
      console.log("word has been added to your VocabulayBank");

      // *********** //
      // fetch the word JSON file from https://github.com/AlexEG/NihongoBridgeDB/tree/main/english/all_vocabulary

      window.api.addNewWordToVocabularyBankWordList(word);
      if (is_audio_file_available)
        window.api.downloadAudioFile(
          `https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/vocabulary-audio-files/${word}.mp3`
        );

      window.api
        .fetchMetadata(
          `https://raw.githubusercontent.com/AlexEG/NihongoBridgeDB/main/english/all_vocabulary/${word}.json`
        )
        .then(
          (WordMetadata: {
            definition: string;
            ipa_phonetic_transcription_us: string;
            ipa_phonemic_transcription_us: string;
            example: string;
            similar_words: string[];
            syllable_division: string;
            tags: string[];
          }) => {
            console.log(
              "From GitHub `AlexEG/NihongoBridgeDB/main/english/all_vocabulary/${word}.json`",
              WordMetadata
            );

            // add the word to vocabulary-bank/ english-vocabulary-bank-word-list.json && english.json

            //  newWordInfo

            window.api.addNewWordToVocabularyBank(
              is_audio_file_available,
              word,
              WordMetadata.definition,
              WordMetadata.ipa_phonemic_transcription_us,
              WordMetadata.ipa_phonetic_transcription_us,
              WordMetadata.example,
              WordMetadata.similar_words,
              WordMetadata.syllable_division,
              WordMetadata.tags
            );
          }
        )
        .catch((error) => {
          console.error("Error fetching metadata:", error);
        });

      // *********** //
    }
  }
  return AddToVocabulayBankBtn;
}
