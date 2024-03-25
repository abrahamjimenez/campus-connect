import React from "react";
import { deleteSessionCookie } from "@/lib/auth";

const SignOutButton = () => {
  async function action() {
    "use server";
    deleteSessionCookie();
  }

  return (
    <form action={action}>
      <button type="submit">Sign out</button>
    </form>
  );
};

export default SignOutButton;
