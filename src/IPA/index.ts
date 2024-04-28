import CharacterSound from "./CharacterSound";

export default function IPA() {
  const IPA_MAIN = document.createElement("main");
  IPA_MAIN.setAttribute("id", "ipa");
  const className1 =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto p-10 overflow-auto relative flex justify-evenly";
  IPA_MAIN.setAttribute("class", className1);

  // ------------------
  const disclosure = document.createElement("p");
  const className2 = "text-white/30 text-xs absolute top-1 left-1";

  disclosure.setAttribute("class", className2);
  disclosure.innerText =
    "The sound and design elements used in this application are sourced from Duolingo. All related rights and trademarks are owned by Duolingo Inc.";
  IPA_MAIN.append(disclosure);
  // ------------------

  // ------------------

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
    CharacterSound("ʌ", "but", "/data/sound/ipa/vowels/ah.mp3"),
    CharacterSound("æ", "cat", "/data/sound/ipa/vowels/ae.mp3"),
    CharacterSound("ɑ", "hot", "/data/sound/ipa/vowels/aa.mp3"),

    CharacterSound("ɚ", "bird", "/data/sound/ipa/vowels/er.mp3"),
    CharacterSound("eɪ", "say", "/data/sound/ipa/vowels/ey.mp3"),
    CharacterSound("ɛ", "bed", "/data/sound/ipa/vowels/eh.mp3"),

    CharacterSound("ə", "about", "/data/sound/ipa/vowels/ah0.mp3"),
    CharacterSound("i", "sheep", "/data/sound/ipa/vowels/iy.mp3"),
    CharacterSound("ɪ", "ship", "/data/sound/ipa/vowels/ih.mp3"),

    CharacterSound("u", "food", "/data/sound/ipa/vowels/uw.mp3"),
    CharacterSound("ʊ", "foot", "/data/sound/ipa/vowels/uh.mp3"),
    CharacterSound("oʊ", "boat", "/data/sound/ipa/vowels/ow.mp3"),

    CharacterSound("ɔɪ", "boy", "/data/sound/ipa/vowels/oy.mp3"),
    CharacterSound("aɪ", "time", "/data/sound/ipa/vowels/ay.mp3"),
    CharacterSound("aʊ", "cow", "/data/sound/ipa/vowels/aw.mp3")
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
    CharacterSound("d", "day", "/data/sound/ipa/consonants/d.mp3"),
    CharacterSound("ʧ", "chair", "/data/sound/ipa/consonants/ch.mp3"),
    CharacterSound("b", "book", "/data/sound/ipa/consonants/b.mp3"),

    CharacterSound("h", "home", "/data/sound/ipa/consonants/hh.mp3"),
    CharacterSound("g", "go", "/data/sound/ipa/consonants/g.mp3"),
    CharacterSound("f", "fish", "/data/sound/ipa/consonants/f.mp3"),

    CharacterSound("l", "lion", "/data/sound/ipa/consonants/l.mp3"),
    CharacterSound("k", "key", "/data/sound/ipa/consonants/k.mp3"),
    CharacterSound("ʤ", "jop", "/data/sound/ipa/consonants/jh.mp3"),

    CharacterSound("ŋ", "sing", "/data/sound/ipa/consonants/ng.mp3"),
    CharacterSound("n", "nose", "/data/sound/ipa/consonants/n.mp3"),
    CharacterSound("m", "moon", "/data/sound/ipa/consonants/m.mp3"),

    CharacterSound("s", "see", "/data/sound/ipa/consonants/s.mp3"),
    CharacterSound("ɹ", "red", "/data/sound/ipa/consonants/r.mp3"),
    CharacterSound("p", "pig", "/data/sound/ipa/consonants/p.mp3"),

    CharacterSound("t", "time", "/data/sound/ipa/consonants/t.mp3"),
    CharacterSound("ʃ", "shoe", "/data/sound/ipa/consonants/sh.mp3"),
    CharacterSound("ʒ", "measure", "/data/sound/ipa/consonants/zh.mp3"),

    CharacterSound("v", "very", "/data/sound/ipa/consonants/v.mp3"),
    CharacterSound("θ", "think", "/data/sound/ipa/consonants/th.mp3"),
    CharacterSound("ð", "then", "/data/sound/ipa/consonants/dh.mp3"),

    CharacterSound("z", "zoo", "/data/sound/ipa/consonants/z.mp3"),
    CharacterSound("j", "you", "/data/sound/ipa/consonants/y.mp3"),
    CharacterSound("w", "water", "/data/sound/ipa/consonants/w.mp3")
  );
  // ------------------

  IPA_MAIN.append(vowelsCharactersContainer, consonantsCharactersContainer);
  return IPA_MAIN;
}
