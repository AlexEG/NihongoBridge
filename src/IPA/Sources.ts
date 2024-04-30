export default function Sources() {
  const SOURCES = document.createElement("div");
  const className = "border0 p-4 relative";
  SOURCES.setAttribute("class", className);
  SOURCES.setAttribute("id", "ipa-sources");

  const postsContainer = document.createElement("section");

  const className2 = "grid grid-cols-3 w-fit mx-auto gap-6 p-1";
  postsContainer.setAttribute("class", className2);

  postsContainer.append(
    blogPost(),
    blogPost(),
    blogPost(),
    blogPost(),
    blogPost()
  );

  SOURCES.append(postsContainer);
  return SOURCES;
}

function blogPost() {
  const blogPost = document.createElement("div");
  const className =
    "border0 h-56 w-64 opacity-80 hover:opacity-100 transition-opacity cursor-pointer ";
  blogPost.setAttribute("class", className);

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
  blogPost.append(cover, titleText);

  blogPost.addEventListener("click", clickHandler);
  function clickHandler() {
    const SOURCES = blogPost.parentElement.parentElement;
    const postsContainer = blogPost.parentElement;
    postsContainer.style.display = "none";

    const webview = document.createElement("webview");
    webview.src =
      "https://en.wikipedia.org/wiki/International_Phonetic_Alphabet";
    const className5 = "w-full h-[calc(100vh-145px)]"; // 31px(titlebar) + 82px(localNav) + 32px (SOURCES padding up and down)
    webview.setAttribute("class", className5);

    SOURCES.append(webview, webviewCloseBtn());
  }

  return blogPost;
}

function webviewCloseBtn() {
  const closeBtn = document.createElement("button");
  const className6 =
    "group absolute top-5 left-1/2 -translate-x-1/2 border bg-black/90 p-2 mx-auto";
  closeBtn.setAttribute("class", className6);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "#ffffff");
  svg.classList.add(
    "w-6",
    "h-6",
    "opacity-50",
    "group-hover:opacity-100",
    "transition-opacity"
  );

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3");

  // Append the path to the SVG element
  svg.append(path);
  closeBtn.append(svg);
  closeBtn.addEventListener("click", closeWebview);
  function closeWebview() {
    const SOURCES = closeBtn.parentElement;
    console.log("SOURCES", SOURCES);
    closeBtn.style.display = "none";
    SOURCES.querySelector("section").style.display = "grid";

    SOURCES.querySelector("webview").remove();
  }
  return closeBtn;
}
