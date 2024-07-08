"use client";

import React, { FormEvent, useState } from "react";
import {
  countryAction,
  emailAction,
  firstNameAction,
  lastNameAction,
  passwordAction,
  phoneAction,
  stateAction,
} from "@/app/profile/action";
import { JWTPayload } from "jose";

const ProfileForm = ({ user }: { user: JWTPayload }) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleFirstNameSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await firstNameAction(formData);
    setErrorMessage(error?.message);
  };

  const handleLastNameSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await lastNameAction(formData);
    setErrorMessage(error?.message);
  };

  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await emailAction(formData);
    setErrorMessage(error?.message);
  };

  const handleCountrySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await countryAction(formData);
    setErrorMessage(error?.message);
  };

  const handleStateSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await stateAction(formData);
    setErrorMessage(error?.message);
  };

  const handlePhoneSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await phoneAction(formData);
    setErrorMessage(error?.message);
  };

  const handlePasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const error = await passwordAction(formData);
    setErrorMessage(error?.message);
  };

  return (
    <div>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <form onSubmit={handleFirstNameSubmit} noValidate>
        <label htmlFor="firstName">First Name: </label>
        <br />
        <input
          id="firstName"
          name="firstName"
          type="text"
          defaultValue={user.firstName as string}
        />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleLastNameSubmit} noValidate>
        <label htmlFor="lastName">Last Name: </label>
        <br />
        <input
          id="lastName"
          name="lastName"
          type="text"
          defaultValue={user.lastName as string}
        />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleEmailSubmit} noValidate>
        <label htmlFor="email">Email: </label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={user.email as string}
        />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handlePasswordSubmit} noValidate>
        <label htmlFor="password">Password: </label>
        <br />
        <input id="password" name="password" type="password" />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleCountrySubmit} noValidate>
        <label htmlFor="country">Country: </label>
        <br />
        <input
          id="country"
          name="country"
          type="text"
          defaultValue={user.country as string}
        />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleStateSubmit} noValidate>
        <label htmlFor="state">State: </label>
        <br />
        <input
          id="state"
          name="state"
          type="text"
          defaultValue={user.state as string}
        />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handlePhoneSubmit} noValidate>
        <label htmlFor="phone">Phone: </label>
        <br />
        <input
          id="phone"
          name="phone"
          type="tel"
          defaultValue={user.phone as string}
        />
        <input
          type="hidden"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfileForm;
