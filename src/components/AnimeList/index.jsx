"use client"

import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4 text-color-primary">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} onClick={scrollTop} className="cursor-pointer hover:text-color-accent transition-all" key={index}>
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h2 className="font-bold md:text-xl text-md px-1 py-4">{anime.title}</h2>
          </Link>
        )
      })}
    </div>
  );
};

export default AnimeList;
