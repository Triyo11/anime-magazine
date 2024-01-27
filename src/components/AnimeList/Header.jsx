import Link from "next/link";

const HeaderAnimeList = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4 text-color-primary">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="underline hover:text-indigo-500 md:text-md text-sm transition-all hover:text-color-accent"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default HeaderAnimeList;
