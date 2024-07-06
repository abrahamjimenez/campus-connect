import { db } from "./db";
import { hash } from "bcrypt";
export async function seedJob() {
  await db.job.create({
    data: {
      createdAt: new Date(),
      description: "This is a sample post",
      dueDate: new Date(),
      price: 100,
      schoolYear: ["Freshman", "Senior"],
      skills: ["skill1", "skill2"],
      title: "Sample Post",
      updatedAt: new Date(),
      userId: 10000,
    },
  });
}

export async function seedUser() {
  await db.user.create({
    data: {
      id: 10000,
      country: "United States",
      email: "jane@email.com",
      firstName: "Jane",
      lastName: "Doe",
      passwordHash: await hash("jane123", 10),
      phone: "098-765-4321",
      state: "United States",
    },
  });
}

async function seedAll() {
  await seedUser();
  await seedJob();
}

seedAll();
