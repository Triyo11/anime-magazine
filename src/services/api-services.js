const dotenv = require("dotenv");

dotenv.config();

const api_anime = "https://api.jikan.moe/v4";

const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${api_anime}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};

const getNestedAnimeResponse = async (resource, objectProperty) => {
  // const response = await getAnimeResponse(resource);
  // const response = await fetch(`${api_anime}/${resource}`);
  const response = await fetch(`${api_anime}/recommendations/anime`);
  const anime = await response.json();
  // const recommendedAnime = anime.data.flatMap(
  //   (item) => item[objectProperty]
  // );
  const recommendedAnime = anime.data.flatMap(
    (item) => item["entry"]
  );
  return recommendedAnime;
};

const reproduceRecommendedAnime = (data, gap) => {
  const startIndexAnime = Math.floor(Math.random() * (data.length - gap + 1));
  return { data: data.slice(startIndexAnime, startIndexAnime + gap) };
};

getNestedAnimeResponse()

module.exports = {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduceRecommendedAnime,
};
