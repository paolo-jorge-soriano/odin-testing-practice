import capitalize from "./capitalize";

test("Capitalize first letter of string", () => {
    expect(capitalize("london")).toBe("London");
});

test("Handles non-string input", () => {
    expect(capitalize(123)).toBe("Not a string");
});