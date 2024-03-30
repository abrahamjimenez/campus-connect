import React from "react";
import { getUserFromSession } from "@/lib/auth";
import Link from "next/link";
import ProfileForm from "@/components/profile/ProfileForm";

const Page = async () => {
  const user = await getUserFromSession();
  // console.log(user);

  return (
    <div>
      {user ? (
        <ProfileForm user={user} />
      ) : (
        <p>
          Please{" "}
          <Link href={"/login"} className="text-blue-600">
            login
          </Link>{" "}
          to view your profile page
        </p>
      )}
    </div>
  );
};

export default Page;
