import { describe, expect, it } from "vitest";
import { Company } from "./Company";

describe("Company.ts", () => {
  it("creates a new company instance with name, location, catch phrase when initialized", () => {
    const company = new Company();
    expect(company.name).toBeTypeOf("string");
    expect(company.catchPhrase).toBeTypeOf("string");
    expect(company.location.lat).toBeTypeOf("number");
    expect(company.location.lng).toBeTypeOf("number");
  });
});
