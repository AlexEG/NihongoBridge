import PracticeBtn from "./PracticeBtn";
import SettingsBtn from "./SettingsBtn";
import HomeBtn from "./HomeBtn";
import HiraganaBtn from "./HiraganaBtn";
import KatakanaBtn from "./KatakanaBtn";
import CalendarBtn from "./CalendarBtn";
import NotificationBtn from "./NotificationBtn";
import StatisticBtn from "./StatisticBtn";
import LeaderboardsBtn from "./LeaderboardsBtn";
import IPABtn from "./IPABtn";
import VocabularyBankBtn from "./VocabularyBankBtn";
import VocabularyShopBtn from "./VocabularyShopBtn";

export default function NavigationSidebar() {
  const container = document.createElement("nav");
  container.setAttribute("id", "navigation-sidbar");
  container.setAttribute("class", "pl-1 z-50");

  const div = document.createElement("div");
  div.setAttribute("class", "mt-auto ");

  div.append(NotificationBtn(), SettingsBtn());

  container.append(
    HomeBtn(),
    IPABtn(),
    StatisticBtn(),
    // CalendarBtn(),
    HiraganaBtn(),
    // KatakanaBtn(),
    PracticeBtn(),
    // LeaderboardsBtn(),
    VocabularyBankBtn(),
    VocabularyShopBtn(),
    div
  );

  return container;
}
