import Image from "next/image";
import Link from "next/link";

const CollectionList = ({ anime_mal_id, anime_image, anime_title }) => {
  return (
    <>
      <Link
        href={`/anime/${anime_mal_id}`}
        className="relative"
      >
        <Image src={anime_image} width={350} height={350} />
        <p className="absolute bottom-0 bg-color-accent text-color-dark md:py-3 py-1 w-full text-center font-bold md:text-lg text-xs">
          {anime_title}
        </p>
      </Link>
    </>
  );
};

export default CollectionList;
