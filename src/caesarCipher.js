function caesarCipher(input, num) {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);

        // Uppercase
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + num + 26) % 26) + 65;
        }

        // Lowercase
        else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + num + 26) % 26) + 97;
        }

        result += String.fromCharCode(charCode);
    }

    return result;
}

module.exports = caesarCipher;