"use client";

import React, { FormEvent } from "react";
import { loginAction } from "@/app/login/actions";

const Page = () => {
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    await loginAction(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Page;
