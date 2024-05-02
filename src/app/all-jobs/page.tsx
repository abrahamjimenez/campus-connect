import React from "react";
import { DisplayJobs } from "@/lib/job";

const Page = async () => {
  const jobs = await DisplayJobs();

  const calculateDateDifference = (jobUpdated: Date) => {
    return jobUpdated.toString().slice(4, 15); // Jan 01, 2025
  };

  const showTimePostedAt = (jobUpdated: Date | any) => {
    const currentDate: Date | any = new Date();

    // subtract dates and find difference
    const diff = currentDate.getTime() - jobUpdated.getTime();
    const diffMinutes = Math.floor(diff / (1000 * 60)); // Convert milliseconds to minutes
    const diffHours = Math.floor(diff / (1000 * 60 * 60)); // Convert milliseconds to hours
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    if (diffDays >= 2) {
      return diffDays + " days ago";
    }

    if (diffDays >= 1) {
      return "1 day ago";
    }

    if (diffHours >= 2) {
      return diffHours + " hours ago";
    }

    if (diffHours >= 1) {
      return "1 hour ago";
    }

    if (diffMinutes >= 2) {
      return diffMinutes + " minutes ago";
    }

    return "Just now"; // Assuming you want to show "Just now" for recent updates
  };

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
