import { db } from "@/lib/db";

interface Job {
  userId: string;
  title: string;
  description: string;
  price: number;
  dueDate: Date;
  schoolYear: string[];
  skills: string[];
}

export async function CreateJob({
  userId,
  title,
  description,
  price,
  dueDate,
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
      schoolYear,
      skills,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });
}

export async function DisplayJobs() {
  return db.job.findMany({
    take: 10,
  });
}
