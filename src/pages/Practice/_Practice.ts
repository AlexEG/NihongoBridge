import LocalNav from "../../../src/common/LocalNav/_LocalNav";
// import LexiconTypist from "./ENG/LexiconTypist/_LexiconTypist";
import English from "./ENG/_English";
import Japanese from "./JP/_Japanese";

// so they just run one time
const ENGLISH = English();
const JAPANESE = Japanese();

export default function Practice() {
  const MAIN = document.createElement("main");
  MAIN.setAttribute("id", "practice");
  const className =
    "bg-[hsl(218,80%,2%)] w-[calc(100%-47px)] h-[calc(100vh-31px)] ml-auto overflow-auto relative";
  MAIN.setAttribute("class", className);

  const naveBtns = [
    { text: "English", HTMLpageToRender: ENGLISH, isOpenByDefault: true },
    { text: "日本語", HTMLpageToRender: JAPANESE },
  ];

  MAIN.append(LocalNav(sectionsContainer(), naveBtns), sectionsContainer());
  return MAIN;
}

function sectionsContainer() {
  const sectionsContainer = document.createElement("div");
  const className2 = "";
  sectionsContainer.setAttribute("class", className2);
  sectionsContainer.setAttribute("id", "sections-container");

  sectionsContainer.append(ENGLISH);
  // sectionsContainer.append(LexiconTypist());

  return sectionsContainer;
}

// TODO
// make bar to select from the folders/wordslist to practice make so you can select more than one
// right below that bar will be the practice types to choose from "Listen & Spell" etc...
// after that take the array from girhub for all the selected folders/wordslist and join them then do as normal

// TODO
// for the bar eather make two bars one for the default/online/fromGithub and a second one for costem made ones by the user
// or make one bar that'll have both but add small tag under the tag for the number of words in that given folder that says online or custom something like that

// TODO
// in "Listen & Spell" first check if the sound for the words is exist then if not use TTS
// add select element for the TTS voice, so the use can change it

// TODO
// when making a new file for each word in statistic/vocabulary add source which would be the name of the folder/wordslist

// TODO
// add an option to change the way the xp is optained, is it based on the number of litters in a given word or is it fixed number
// add an option to the title bar for correct words and worng words as well as in the statistic page
// and add another option for is it based on today, this week, month, year and what language
// have the ability to add more than one from the same tracker but in different time length
// so if you have xp forever which is the current one and another xp but for today only
