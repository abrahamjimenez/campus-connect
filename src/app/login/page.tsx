"use client";

import React, { FormEvent, useState } from "react";
import { loginAction } from "@/app/login/actions";

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await loginAction(formData);
    setErrorMessage(error?.message);
  };

  return (
    <form onSubmit={submitHandler} noValidate>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

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
