import {signOutAction} from "@/components/action";
import { deleteSessionCookie } from "@/lib/auth";

jest.mock("@/lib/auth", () => ({
    deleteSessionCookie: jest.fn()
}))

describe("Sign out action", () => {
    it("Should call deleteSessionCookie", async () => {
        await signOutAction()

        expect(deleteSessionCookie).toHaveBeenCalled()
    })
})
