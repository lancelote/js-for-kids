function convertToH4ck3rSp34k(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            result.push("4");
        } else if (string[i] === "e") {
            result.push("3");
        } else if (string[i] === "i") {
            result.push("1");
        } else if (string[i] === "o") {
            result.push("0");
        } else {
            result.push(string[i]);
        }
    }
    return result.join("");
}

const input = "javascript is awesome";
const output = convertToH4ck3rSp34k(input);

console.log(output);
