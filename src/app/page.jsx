import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduceRecommendedAnime } from "@/services/api-services";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse()
  recommendedAnime = reproduceRecommendedAnime(recommendedAnime, 8)

  return (
    <>
      <section>
        <HeaderAnimeList
          title={"Paling Populer"}
          linkHref={"/populer/1"}
          linkTitle={"Lihat lainnya"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <HeaderAnimeList
          title={"Rekomendasi"}
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
