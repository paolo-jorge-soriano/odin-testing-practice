import calculator from "./calculator";

test("Correctly adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("Correctly subtracts two numbers", () => {
    expect(calculator.subtract(3, 4)).toBe(-1);
});

test("Correctly multiplies two numbers", () => {
    expect(calculator.multiply(5, 6)).toBe(30);
});

test("Correctly divides two numbers", () => {
    expect(calculator.divide(14, 7)).toBe(2);
});

test("Handles zero division", () => {
    expect(calculator.divide(8, 0)).toBe(undefined);
});