const dotenv = require("dotenv")

dotenv.config();

const api_anime = process.env.NEXT_PUBLIC_API_BASE_URL
console.log(api_anime);

const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${api_anime}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  const recommendedAnime = response.data.flatMap(
    (item) => item[objectProperty]
  );
  return recommendedAnime;
};

const reproduceRecommendedAnime = (data, gap) => {
  const startIndexAnime = Math.floor(Math.random() * (data.length - gap + 1));
  return { data: data.slice(startIndexAnime, startIndexAnime + gap) };
};

module.exports = {getAnimeResponse, getNestedAnimeResponse, reproduceRecommendedAnime}