"use client";

import React from "react";
import { signOutAction } from "@/components/action";

const SignOutButton = () => {
  async function submitHandler() {
    await signOutAction();
  }

  return (
    <form onSubmit={submitHandler} className="self-end">
      <button
        type="submit"
        className="text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
      >
        Sign out
      </button>
    </form>
  );
};

export default SignOutButton;
