"use client";

import React from "react";
import { signOutAction } from "@/components/action";

const SignOutButton = () => {
  async function submitHandler() {
    await signOutAction();
  }

  return (
    <form onSubmit={submitHandler}>
      <button type="submit">Sign out</button>
    </form>
  );
};

export default SignOutButton;
