import { registerCredit } from "./../../../src/controllers/userController";

describe("User controller", () => {
  test("Add credits in user empty", async () => {
    const data = await registerCredit("");
    expect(data).toBe(false);
  });
  test("With user that not exist", async () => {
    const data = await registerCredit("0000000");
    expect(data).toBe(false);
  });
});
