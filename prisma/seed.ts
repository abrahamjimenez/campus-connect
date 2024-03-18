import {db} from "./db"

export async function seedPaymentMethods() {
  await db.paymentMethods.create({
    data: {
      method: ["Credit Card", "PayPal"],
      userId: "someUserId", // replace with actual user id
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
      userId: "someUserId", // replace with actual user id
    },
  });
}

export async function seedUser() {
    db.user.create({
        data: {
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
