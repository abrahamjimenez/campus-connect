import React from "react";
import { DisplayJobs } from "@/lib/job";

const Page = async () => {
  const jobs = await DisplayJobs();

  const calculateDateDifference = (jobUpdated: Date) => {
    return jobUpdated.toString().slice(4, 15);
  };

  /*const calculateDateDifference = (jobs) => {
    // date updatedAt
    const date1 = new Date(jobs[0].updatedAt);
    console.log(date1);

    // current date
    const date2 = new Date();
    console.log(date2);

    // subtract dates
    const diff = date2 - date1; // prints in milliseconds
    const diffDays = diff / (1000 * 60 * 60 * 24); // convert ms to days
    const diffHours = diff / (1000 * 60 * 60); // convert ms to hours

    return diffHours;
  }*/

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-black py-4 flex flex-col gap-4"
        >
          {/*<p className={"flex gap-1 font-extralight text-xs"}>Posted: {diffHours > 24 ? (diffDays.toFixed(0) + ' days ago') : (diffHours.toFixed(0) + " hours ago")}</p>*/}
          <p className={"flex gap-1 font-extralight text-xs"}>
            Posted: {calculateDateDifference(job.updatedAt)}
          </p>
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
            {job.skills.map((skill, index) => (
              <span
                key={index}
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
