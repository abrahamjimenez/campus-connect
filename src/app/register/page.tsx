"use client";

import React, { FormEvent, useState } from "react";
import { registerAction } from "@/app/register/actions";

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await registerAction(formData);
    setErrorMessage(error);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        autoComplete="given-name"
        required
      />

      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        autoComplete="family-name"
      />

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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Page;
