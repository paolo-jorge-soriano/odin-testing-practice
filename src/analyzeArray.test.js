import analyzeArray from "./analyzeArray";

test("Correctly computes min, max, average, length of an array and returns an object", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});