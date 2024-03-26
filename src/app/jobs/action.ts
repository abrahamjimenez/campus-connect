"use server";

import { CreateJob } from "@/lib/job";

export async function jobAction(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    price: parseInt(formData.get("price") as string) | 0,
    dueDate:
      (formData.get("date") as string) != ""
        ? new Date(formData.get("date") as string)
        : new Date(0),
    schoolYear: [
      formData.get("freshman") as string,
      formData.get("sophomore") as string,
      formData.get("junior") as string,
      formData.get("senior") as string,
    ].filter(Boolean),
    skills: (formData.get("skills") as string).split(","),
    // pass user id as a prop?
    userId: formData.get("userId") as string,
  };

  // console.log("jobAction", data);
  await CreateJob(data);
}
