import { db } from "@/lib/db";

interface Job {
  userId: string;
  title: string;
  description: string;
  price: number;
  dueDate: Date;
  images: string[];
  schoolYear: string[];
  skills: string[];
}

export async function CreateJob({
  userId,
  title,
  description,
  price,
  dueDate,
  images,
  schoolYear,
  skills,
}: Job) {
  await db.job.create({
    data: {
      userId,
      title,
      description,
      price,
      dueDate,
      images,
      schoolYear,
      skills,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
}
