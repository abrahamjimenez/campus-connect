import React from "react";
import { DisplayJobs } from "@/lib/job";
import { calculateDateDifference, showTimePostedAt } from "@/lib/dateUtils";

const Page = async () => {
  const jobs = await DisplayJobs();

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-black py-4 flex flex-col gap-4"
        >
          <div className={"flex gap-1 font-extralight text-xs"}>
            <p>Posted: {calculateDateDifference(job.updatedAt)}</p>
            <p>-</p>
            <p>{showTimePostedAt(job.updatedAt)}</p>
          </div>
          <h2 className="font-bold">{job.title}</h2>
          <div className={"flex gap-1 font-extralight text-xs"}>
            <p className="">
              Price: {job.price !== 0 ? `$${job.price}` : "Unpaid"}
            </p>
            <p>|</p>
            <p>
              Due: {job.dueDate.toString().slice(4, 10)},{" "}
              {job.dueDate.toString().slice(10, 15)}
            </p>
          </div>
          <p>{job.description}</p>
          <p>School Year: {job.schoolYear.join(", ")}</p>
          <div className={"flex gap-2 items-center"}>
            {job.skills.map((skill) => (
              <span
                key={skill}
                className={skill && "border border-black rounded-xl p-1"}
              >
                {skill}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
