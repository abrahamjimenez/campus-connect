"use client";

import React, { FormEvent } from "react";
import { firstNameAction, lastNameAction } from "@/app/profile/action";
import { JWTPayload } from "jose";

const ProfileForm = ({ user }: { user: JWTPayload }) => {
  const handleFirstNameSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await firstNameAction(formData);
  };

  const handleLastNameSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await lastNameAction(formData);
  };

  return (
    <div>
      <form onSubmit={handleFirstNameSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <br />
        <input
          id="firstName"
          name="firstName"
          type="text"
          defaultValue={user.firstName as string}
        />
        <input
          type="text"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleLastNameSubmit}>
        <label htmlFor="lastName">Last Name: </label>
        <br />
        <input
          id="lastName"
          name="lastName"
          type="text"
          defaultValue={user.lastName as string}
        />
        <input
          type="text"
          hidden
          defaultValue={user.userId as string}
          name="userId"
        />
        <button type="submit">Update</button>
      </form>

      <form action="">
        <label htmlFor="email">Email: </label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={user.email as string}
        />
        <button type="submit">Update</button>
      </form>

      <form action="">
        <label htmlFor="password">Password: </label>
        <br />
        <input id="password" name="password" type="password" />
        <button type="submit">Update</button>
      </form>

      <form action="">
        <label htmlFor="country">Country: </label>
        <br />
        <input id="country" name="country" type="text" />
        <button type="submit">Update</button>
      </form>

      <form action="">
        <label htmlFor="state">State: </label>
        <br />
        <input id="state" name="state" type="text" />
        <button type="submit">Update</button>
      </form>

      <form action="">
        <label htmlFor="phone">Phone: </label>
        <br />
        <input id="phone" name="phone" type="tel" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfileForm;
