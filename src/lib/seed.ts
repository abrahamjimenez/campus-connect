import { db } from "./db";
import { hash } from "bcrypt";
import colors from "colors";

colors.enable();

async function seedJob() {
  await db.job.create({
    data: {
      createdAt: new Date(),
      description: "I need someone to build my portfolio with React + Postgres",
      dueDate: new Date(),
      price: 100,
      schoolYear: ["Freshman", "Sophomore", "Junior", "Senior"],
      skills: ["React", "Postgres"],
      title: "Web Portfolio Needed!",
      updatedAt: new Date(),
      userId: 10000,
    },
  });
}

async function seedUser() {
  await db.user.create({
    data: {
      id: 10000,
      country: "United States",
      email: "admin@email.com",
      firstName: "Admin",
      lastName: "",
      passwordHash: await hash("123456", 10),
      phone: "123-456-7890",
      state: "Idaho",
    },
  });
}

async function deleteData() {
  await db.job.deleteMany({});
  await db.user.deleteMany({});
}

async function seedAll() {
  await deleteData();
  await seedUser();
  await seedJob();
}

seedAll()
  .then(() => console.log("Seeding successful".green))
  .catch((e) => console.error(`Seeding failed: ${e}`.red));
