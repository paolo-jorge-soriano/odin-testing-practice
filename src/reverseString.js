function reverseString(input) {
    if (typeof input !== "string") {
        return "Not a string";
    }
    else {
        return input.split("").reverse().join("");
    }
}

console.log(reverseString("Hello World!"));

module.exports = reverseString;