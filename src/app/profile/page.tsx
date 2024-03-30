import React from "react";
import { getUserFromSession } from "@/lib/auth";
import Link from "next/link";

const Page = async () => {
  const user = await getUserFromSession();
  console.log(user);

  return (
    <div>
      {user ? (
        <p>user logged in</p>
      ) : (
          (
          <p>
            Please <Link href={"/login"} className="text-blue-600">login</Link> to view your profile page
          </p>
          )
      )}
    </div>
  );
};

export default Page;
