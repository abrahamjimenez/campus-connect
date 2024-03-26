import React from "react";
import { DisplayJobs } from "@/lib/job";

const Page = async () => {
  const jobs = await DisplayJobs();
  console.log(jobs);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="border border-black py-4">
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>Price: {job.price !== 0 ? `$${job.price}` : "Unpaid"}</p>
          <p>Due Date: {job.dueDate.toString().slice(0, 10)}</p>
          <p>School Year: {job.schoolYear.join(", ")}</p>
          <p>Skills: {job.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
