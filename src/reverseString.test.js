import reverseString from "./reverseString";

test("Correctly reverses a string", () => {
   expect(reverseString("apple")).toBe("elppa"); 
});

test("Correctly reverses a string with spaces", () => {
   expect(reverseString("hello world")).toBe("dlrow olleh"); 
});

test("Handles non-string input", () => {
    expect(reverseString(123)).toBe("Not a string");
});