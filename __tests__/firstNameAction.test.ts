// import {firstNameAction} from "@/app/profile/action";
// import { FindUser, UpdateUserFirstName } from "@/lib/user";
// import { FirstNameSchema } from "@/app/profile/validation";
// import { setSessionCookie } from "@/lib/auth";
//
// jest.mock("@/lib/user");
// jest.mock("@/app/profile/validation");
// jest.mock("@/lib/auth");
//
// describe("firstNameAction", () => {
//     it("should update first name and set session cookie", async () => {
//         const formData = new FormData();
//         formData.append("firstName", "John");
//         formData.append("userId", "1");
//
//         (FindUser as jest.Mock).mockResolvedValue({ id: 1 });
//         (UpdateUserFirstName as jest.Mock).mockResolvedValue("John");
//         (FirstNameSchema.safeParse as jest.Mock).mockReturnValue({ success: true });
//         (setSessionCookie as jest.Mock).mockResolvedValue();
//
//         const result = await firstNameAction(formData);
//
//         expect(FindUser).toHaveBeenCalledWith(1);
//         expect(UpdateUserFirstName).toHaveBeenCalledWith(1, "John");
//         expect(FirstNameSchema.safeParse).toHaveBeenCalledWith("John");
//         expect(setSessionCookie).toHaveBeenCalledWith("John");
//         expect(result).toBeUndefined();
//     });
//
//     it("should return error if validation fails", async () => {
//         const formData = new FormData();
//         formData.append("firstName", "John");
//         formData.append("userId", "1");
//
//         (FindUser as jest.Mock).mockResolvedValue({ id: 1 });
//         (UpdateUserFirstName as jest.Mock).mockResolvedValue("John");
//         (FirstNameSchema.safeParse as jest.Mock).mockReturnValue({ success: false, error: { issues: [{ message: "Invalid name" }] } });
//
//         const result = await firstNameAction(formData);
//
//         expect(result).toEqual({ isError: true, message: "Invalid name" });
//     });
// });
