"use client";

import React, { FormEvent } from "react";
import { TagsInput } from "@mantine/core";
import { jobAction } from "@/app/create-job/action";
import { Calendar } from "@/components/ui/calendar";

const JobForm = ({ userId }: { userId: string }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (date) {
      formData.append("date", date.toISOString());
    }

    await jobAction(formData);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <input type="hidden" name="userId" value={userId} />

      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" required />

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" required />

      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

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

export default JobForm;
