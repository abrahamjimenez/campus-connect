import React from "react";
import { getUserFromSession } from "@/lib/auth";
import Link from "next/link";

const Page = async () => {
  const user = await getUserFromSession();

  return (
    <div>
      {user ? (
        <div>
          <form action="">
            <label htmlFor="firstName">First Name: </label>
            <br />
            <input type="text" defaultValue={user.firstName as string} />
            <button type="submit">Update</button>
          </form>

          <form action="">
            <label htmlFor="lastName">Last Name: </label>
            <br />
            <input type="text" defaultValue={user.lastName as string} />
            <button type="submit">Update</button>
          </form>

          <form action="">
            <label htmlFor="email">Email: </label>
            <br />
            <input type="email" defaultValue={user.email as string} />
            <button type="submit">Update</button>
          </form>

          <form action="">
            <label htmlFor="password">Password: </label>
            <br />
            <input type="password" />
            <button type="submit">Update</button>
          </form>

          <form action="">
            <label htmlFor="country">Country: </label>
            <br />
            <input type="text" />
            <button type="submit">Update</button>
          </form>

          <form action="">
            <label htmlFor="state">State: </label>
            <br />
            <input type="text" />
            <button type="submit">Update</button>
          </form>

          <form action="">
            <label htmlFor="phone">Phone: </label>
            <br />
            <input type="tel" />
            <button type="submit">Update</button>
          </form>
        </div>
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
