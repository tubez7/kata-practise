function rot13(str) {

    if (str.length < 1) return str;

    const strCodes = [];

    for (let i = 0; i < str.length; i++) {
        strCodes.push(str.charCodeAt(i));
    }

    const rotCodes = strCodes.map((code) => code + 13);

    const decipheredCodes = rotCodes.map((code) => String.fromCharCode(code));

    return decipheredCodes.join("");

}

module.exports = rot13;