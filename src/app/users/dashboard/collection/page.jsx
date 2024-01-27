import CollectionList from "@/components/CollectionList";
import HeaderCollectionList from "@/components/CollectionList/Header";
import { UserSessionServer } from "@/services/auth-services";
import prisma from "@/services/prisma";

const Page = async () => {
  const user = await UserSessionServer();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  console.log(collection);

  return (
    <div className="p-4">
      <div>
        <HeaderCollectionList />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-4 gap-4">
        {collection.map((item, index) => (
          <CollectionList
            key={index}
            anime_mal_id={item.anime_mal_id}
            anime_image={item.anime_image}
            anime_title={item.anime_title}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
