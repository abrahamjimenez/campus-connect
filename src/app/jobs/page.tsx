"use client";

import React, {FormEvent, useCallback} from "react";
import { jobAction } from "@/app/jobs/action";
import { TagsInput } from "@mantine/core";
import {useDropzone} from "react-dropzone";

const Page = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log("acceptedFiles", acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

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

      <label htmlFor="date">Due date</label>
      <input type="date" name="date" id="date" />

        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag n drop some files here, or click to select files</p>
            }
        </div>

        <div>
            <p>School year</p>

            <input type="checkbox" id="freshman" name="freshman" value="Freshman"/>
            <label htmlFor="freshman"> Freshman</label>
            <br/>

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
