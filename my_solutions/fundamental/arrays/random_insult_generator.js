const randomBodyParts = ["Face", "Nose", "Hair"];
const randomAdjectives = ["Smelly", "Boring", "Stupid"];
const randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

const randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!`;
console.log(randomInsult);
