export default function DuolingoEnglishIPA() {
  const duolingoEnglishIPA = document.createElement("div");
  duolingoEnglishIPA.setAttribute("class", "relative flex justify-evenly");

  const vowelsCharactersContainer = document.createElement("div");
  const className3 =
    "grid grid-cols-3 gap-x-3 gap-y-6 w-fit h-fit pt-10 relative";
  vowelsCharactersContainer.setAttribute("class", className3);

  const vowelsCharactersContainerTitle = document.createElement("h2");
  vowelsCharactersContainerTitle.setAttribute(
    "class",
    "text-white/30 text-1xl text-center font-bold absolute top-0 w-full"
  );
  vowelsCharactersContainerTitle.innerText = "VOWELS";
  vowelsCharactersContainer.append(vowelsCharactersContainerTitle);

  vowelsCharactersContainer.append(
    characterSound("ʌ", "but", "/data/sound/ipa/vowels/ah.mp3"),
    characterSound("æ", "cat", "/data/sound/ipa/vowels/ae.mp3"),
    characterSound("ɑ", "hot", "/data/sound/ipa/vowels/aa.mp3"),

    characterSound("ɚ", "bird", "/data/sound/ipa/vowels/er.mp3"),
    characterSound("eɪ", "say", "/data/sound/ipa/vowels/ey.mp3"),
    characterSound("ɛ", "bed", "/data/sound/ipa/vowels/eh.mp3"),

    characterSound("ə", "about", "/data/sound/ipa/vowels/ah0.mp3"),
    characterSound("i", "sheep", "/data/sound/ipa/vowels/iy.mp3"),
    characterSound("ɪ", "ship", "/data/sound/ipa/vowels/ih.mp3"),

    characterSound("u", "food", "/data/sound/ipa/vowels/uw.mp3"),
    characterSound("ʊ", "foot", "/data/sound/ipa/vowels/uh.mp3"),
    characterSound("oʊ", "boat", "/data/sound/ipa/vowels/ow.mp3"),

    characterSound("ɔɪ", "boy", "/data/sound/ipa/vowels/oy.mp3"),
    characterSound("aɪ", "time", "/data/sound/ipa/vowels/ay.mp3"),
    characterSound("aʊ", "cow", "/data/sound/ipa/vowels/aw.mp3")
  );

  // ------------------

  // ------------------

  const consonantsCharactersContainer = document.createElement("div");
  const className =
    "grid grid-cols-3 gap-x-3 gap-y-6 w-fit h-fit pt-10 relative";
  consonantsCharactersContainer.setAttribute("class", className);

  const consonantsCharactersContainerTitle = document.createElement("h2");
  consonantsCharactersContainerTitle.setAttribute(
    "class",
    "text-white/30 text-1xl text-center font-bold absolute top-0 w-full"
  );
  consonantsCharactersContainerTitle.innerText = "CONSONANTS";
  consonantsCharactersContainer.append(consonantsCharactersContainerTitle);

  consonantsCharactersContainer.append(
    characterSound("d", "day", "/data/sound/ipa/consonants/d.mp3"),
    characterSound("ʧ", "chair", "/data/sound/ipa/consonants/ch.mp3"),
    characterSound("b", "book", "/data/sound/ipa/consonants/b.mp3"),

    characterSound("h", "home", "/data/sound/ipa/consonants/hh.mp3"),
    characterSound("g", "go", "/data/sound/ipa/consonants/g.mp3"),
    characterSound("f", "fish", "/data/sound/ipa/consonants/f.mp3"),

    characterSound("l", "lion", "/data/sound/ipa/consonants/l.mp3"),
    characterSound("k", "key", "/data/sound/ipa/consonants/k.mp3"),
    characterSound("ʤ", "jop", "/data/sound/ipa/consonants/jh.mp3"),

    characterSound("ŋ", "sing", "/data/sound/ipa/consonants/ng.mp3"),
    characterSound("n", "nose", "/data/sound/ipa/consonants/n.mp3"),
    characterSound("m", "moon", "/data/sound/ipa/consonants/m.mp3"),

    characterSound("s", "see", "/data/sound/ipa/consonants/s.mp3"),
    characterSound("ɹ", "red", "/data/sound/ipa/consonants/r.mp3"),
    characterSound("p", "pig", "/data/sound/ipa/consonants/p.mp3"),

    characterSound("t", "time", "/data/sound/ipa/consonants/t.mp3"),
    characterSound("ʃ", "shoe", "/data/sound/ipa/consonants/sh.mp3"),
    characterSound("ʒ", "measure", "/data/sound/ipa/consonants/zh.mp3"),

    characterSound("v", "very", "/data/sound/ipa/consonants/v.mp3"),
    characterSound("θ", "think", "/data/sound/ipa/consonants/th.mp3"),
    characterSound("ð", "then", "/data/sound/ipa/consonants/dh.mp3"),

    characterSound("z", "zoo", "/data/sound/ipa/consonants/z.mp3"),
    characterSound("j", "you", "/data/sound/ipa/consonants/y.mp3"),
    characterSound("w", "water", "/data/sound/ipa/consonants/w.mp3")
  );
  // ------------------

  duolingoEnglishIPA.append(
    vowelsCharactersContainer,
    consonantsCharactersContainer
  );

  return duolingoEnglishIPA;
}

function characterSound(
  character: string,
  wordExample: string,
  soundFile: string
) {
  const characterBtn = document.createElement("button");
  characterBtn.setAttribute(
    "class",
    "w-20 h-20 flex flex-col p-2 border border-white/50 "
  );

  const span1 = document.createElement("span");
  const span2 = document.createElement("span");

  span1.setAttribute("class", "w-full text-white/90 text-center text-3xl");
  span2.setAttribute("class", "w-full text-white/50 text-center");

  span1.innerText = character;
  span2.innerText = wordExample;

  characterBtn.append(span1, span2);

  characterBtn.addEventListener("click", () => {
    const audio = new Audio(soundFile);
    audio.play();
  });

  return characterBtn;
}
