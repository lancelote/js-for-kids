const alphabet = "abcdefghijklmnopqrstuvwxyz";


function generateRandomString(length) {
    let result = [];
    while (length > 0) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const randomChar = alphabet[randomIndex];
        result.push(randomChar);
        length--;
    }
    return result.join("");
}

const randomString = generateRandomString(10)
console.log(randomString);
