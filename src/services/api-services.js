export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)
  const recommendedAnime = response.data.flatMap(item => item[objectProperty])
  return recommendedAnime
}

export const reproduceRecommendedAnime = (data, gap) => {
  const startIndexAnime = Math.floor(Math.random() * ((data.length - gap) + 1))
  return {data : data.slice(startIndexAnime, startIndexAnime + gap)}
} 