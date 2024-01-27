import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/services/api-services";

const SearchPage = async ({params}) => {
  const keyword = decodeURI(params.keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

  return (
    <>
      <section>
        <HeaderAnimeList
          title={`Pencarian untuk ${keyword}...`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default SearchPage;
