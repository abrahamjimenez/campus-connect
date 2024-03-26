import React from "react";
import { getUserFromSession } from "@/lib/auth";
import JobForm from "@/components/JobForm";
import Link from "next/link";

const Page = async () => {
  const user = await getUserFromSession();

  return (
    <>
      {user ? (
        <JobForm userId={user.userId as string} />
      ) : (
        <div>
          <p>
            Please
            <Link href="/login" className="text-blue-600">
              {" "}
              log in{" "}
            </Link>
            to create a job
          </p>
        </div>
      )}
    </>
  );
};

export default Page;
