export default function Sources() {
  const SOURCES = document.createElement("div");
  const className = "border0 grid grid-cols-3 w-fit mx-auto gap-6 p-1";
  SOURCES.setAttribute("class", className);

  SOURCES.append(blogPost(), blogPost(), blogPost(), blogPost(), blogPost());
  return SOURCES;
}

function blogPost() {
  const container = document.createElement("div");
  const className =
    "border0 h-56 w-64 opacity-80 hover:opacity-100 transition-opacity cursor-pointer ";
  container.setAttribute("class", className);

  const cover = document.createElement("div");
  const className2 = "w-full h-40 relative";

  cover.setAttribute("class", className2);
  cover.style.backgroundImage =
    "url('https://healthy-workplaces.osha.europa.eu/sites/hwc/files/styles/large/public/2022-06/Wikipedia-logo.png?itok=sQJn3LHK')";
  cover.style.backgroundSize = "cover";

  const overlay = document.createElement("div");
  const className3 =
    "absolute inset-0 bg-gradient-to-t from-black/90 to-transparent";

  overlay.setAttribute("class", className3);
  cover.append(overlay);

  const titleText = document.createElement("p");
  const className4 = "text-white p-1 truncate-2-lines text-sm";
  titleText.setAttribute("class", className4);
  titleText.innerText = "International Phonetic Alphabet - Wikipedia";
  container.append(cover, titleText);

  // TODO make this a feature: open the links in the app itself
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    "https://en.wikipedia.org/wiki/International_Phonetic_Alphabet"
  );

  link.append(container);
  return link;
}
