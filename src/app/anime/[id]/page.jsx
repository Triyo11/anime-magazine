import { getAnimeResponse } from "@/services/api-services";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { UserSessionServer } from "@/services/auth-services";
import Image from "next/image";
import CollectionButton from "@/components/CollectionButton";
import prisma from "@/services/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await UserSessionServer();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="text-color-primary font-bold text-2xl pt-4 px-8">
        <h2>
          <span className="text-color-accent">{anime.data.title}</span> |{" "}
          <span className="text-color-accent">{anime.data.year}</span>
        </h2>
        {!collection && user && (
          <CollectionButton
            user_email={user?.email}
            anime_mal_id={id}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="flex gap-4 md:justify-center px-8 pt-4 overflow-x-auto">
        <div className="flex flex-col items-center text-color-primary border rounded border-color-primary p-2">
          <h3>Peringkat</h3>
          <p className="text-color-accent">{anime.data.rank}</p>
        </div>
        <div className="flex flex-col items-center text-color-primary border rounded border-color-primary p-2">
          <h3>Skor</h3>
          <p className="text-color-accent">{anime.data.score}</p>
        </div>
        <div className="flex flex-col items-center text-color-primary border rounded border-color-primary p-2">
          <h3>Sumber</h3>
          <p className="text-color-accent">{anime.data.source}</p>
        </div>
        <div className="flex flex-col items-center text-color-primary border rounded border-color-primary p-2">
          <h3>Status</h3>
          <p className="text-color-accent">{anime.data.status}</p>
        </div>
        <div className="flex flex-col items-center text-color-primary border rounded border-color-primary p-2">
          <h3>Jumlah Episode</h3>
          <p className="text-color-accent">{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap px-8 py-8 gap-4">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={350}
          height={350}
          className="object-cover w-full rounded"
        />
        <p className="text-color-primary text-justify">
          SYNOPSIS -- {anime.data.synopsis}
        </p>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
