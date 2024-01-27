import DashboardActionButton from "@/components/DashboardActionButton";
import { UserSessionServer } from "@/services/auth-services";
import Image from "next/image";

const Page = async () => {
  const user = await UserSessionServer();
  const name = user?.name;
  const image = user?.image;
  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h2 className="font-bold text-xl text-color-primary text-center py-4">Hi, {name}!</h2>
      <Image src={image} width={150} height={150} />
      <div className="flex flex-wrap justify-center items-center gap-4 py-8">
        <DashboardActionButton
          dashboardButtonTitle={"Collection"}
          dashboardButtonLink={"/users/dashboard/collection"}
        />
        {/* <DashboardActionButton
          dashboardButtonTitle={"Comment"}
          dashboardButtonLink={"/users/dashboard/comment"}
        /> */}
      </div>
    </div>
  );
};

export default Page;
