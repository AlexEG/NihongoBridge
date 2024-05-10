import Article from "./Article";
interface resources {
  metadate: {
    totalNumberOfResources: number;
    articlesCount: number;
    youtubeCount: number;
  };
  articles: {
    image: string;
    title: string;
    link: string;
    addedDate: number;
  }[];
}

export default function Japanese() {
  const SOURCES = document.createElement("div");
  const className = "border0 p-4 relative";
  SOURCES.setAttribute("class", className);
  SOURCES.setAttribute("id", "ipa-sources");

  const postsContainer = document.createElement("section");

  const className2 = "grid grid-cols-3 w-fit mx-auto gap-6 p-1";
  postsContainer.setAttribute("class", className2);

  window.api
    .readJsonFile("resources/japanese-resources.json")
    .then((data: resources) => {
      for (const articleInfo of data.articles) {
        postsContainer.append(
          Article(
            articleInfo.image,
            articleInfo.title,
            articleInfo.link,
            articleInfo.addedDate
          )
        );
      }
    })
    .catch((error: Error) => {
      console.error("Failed to read the JSON file:", error);
    });

  SOURCES.append(postsContainer);
  return SOURCES;
}
