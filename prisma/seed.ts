import {db} from "./db"

export async function seedPaymentMethods() {
  await db.paymentMethods.create({
    data: {
      method: ["Credit Card", "PayPal"],
      userId: "65f7b8016acfc0241d813b96"
    },
  });
}

export async function seedPost() {
  await db.post.create({
    data: {
      createdAt: new Date(),
      description: "This is a sample post",
      dueDate: new Date(),
      free: true,
      images: ["image1.jpg", "image2.jpg"],
      price: 100,
      schoolYear: ["2022", "2023"],
      skills: ["skill1", "skill2"],
      title: "Sample Post",
      updatedAt: new Date(),
      userId: "65f7b8016acfc0241d813b96"
    },
  });
}

export async function seedUser() {
    await db.user.create({
        data: {
            id: "65f7b8016acfc0241d813b96",
            country: "United States",
            email: "jane@email.com",
            firstName: "Jane",
            lastName: "Doe",
            password: "jane123",
            phone: "098-765-4321",
            state: "United States"
        }
    })
}

seedUser()
