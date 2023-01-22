import { describe, expect, it } from "vitest";
import { User } from "./User";

describe("User.ts", () => {
  it("creates a new user instance with name, location when initialized", () => {
    const user = new User();
    expect(user.name).toBeTypeOf("string");
    expect(user.location.lat).toBeTypeOf("number");
    expect(user.location.lng).toBeTypeOf("number");
  });
});
