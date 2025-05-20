function capitalize(input) {
    if (typeof input !== "string") {
        return "Not a string";
    }
    else {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}

module.exports = capitalize;