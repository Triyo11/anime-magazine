import { UserSessionServer } from "@/services/auth-services";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await UserSessionServer();
  const actionLabel = user ? "Sign out" : "Sign in";
  const actionLink = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex flex-wrap md:justify-center justify-between items-center gap-4">
      {user ? (
        <Link href={"/users/dashboard"} className="">
          Dashboard
        </Link>
      ) : null}
      <Link href={actionLink} className="rounded-lg bg-color-dark text-color-primary p-2">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
