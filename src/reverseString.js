function reverseString(input) {
    if (typeof input !== "string") {
        return "Not a string";
    }
    else {
        return input.split("").reverse().join("");
    }
}

module.exports = reverseString;