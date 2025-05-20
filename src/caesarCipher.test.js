import caesarCipher from "./caesarCipher";

test("Shifts string by 1", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Shifts string by -1", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
});

test("Preserves original lettercase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Handles spaces and special characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});