import BackspaceBtn from "./BackspaceBtn";
import EnterKey from "./EnterKey";
import { LeftArrowKey, RightArrowKey } from "./RightLeftArrowKeys";
import SpaceKey from "./SpaceKey";

export default function ControlRow() {
  const ControlRow = document.createElement("div");
  const className = "border0 mt-2 w-full flex gap-x-2 justify-between";
  ControlRow.setAttribute("class", className);

  const className2 = "flex gap-x-1";
  const wrapper1 = document.createElement("div");
  const wrapper2 = document.createElement("div");
  wrapper1.setAttribute("class", className2);
  wrapper2.setAttribute("class", className2);

  wrapper1.append(LeftArrowKey(), RightArrowKey());
  wrapper2.append(EnterKey(), BackspaceBtn());

  ControlRow.append(wrapper1, SpaceKey(), wrapper2);
  return ControlRow;
}
