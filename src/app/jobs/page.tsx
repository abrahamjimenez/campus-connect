"use client";

import React, { FormEvent } from "react";
import { jobAction } from "@/app/jobs/action";
import { TagsInput } from "@mantine/core";

const Page = () => {
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    await jobAction(formData);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />

      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" />

      {/*  todo: calendar from mantine.dev?*/}
      <label htmlFor="date">Due date</label>
      <input type="date" name="date" id="date" />

      <div>
        <p>School year</p>

        <input type="checkbox" id="freshman" name="freshman" value="Freshman" />
        <label htmlFor="freshman"> Freshman</label>
        <br />

        <input
          type="checkbox"
          id="sophomore"
          name="sophomore"
          value="Sophomore"
        />
        <label htmlFor="sophomore"> Sophomore</label>
        <br />

        <input type="checkbox" id="junior" name="junior" value="Junior" />
        <label htmlFor="junior"> Junior</label>
        <br />

        <input type="checkbox" id="senior" name="senior" value="Senior" />
        <label htmlFor="senior"> Senior</label>
        <br />
      </div>

      <TagsInput
        label="Skills"
        name="skills"
        placeholder="Press enter or comma to confirm"
      />

      <button type="submit">Post the job</button>
    </form>
  );
};

export default Page;
