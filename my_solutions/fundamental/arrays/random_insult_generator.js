const randomBodyParts = ["Face", "Nose", "Hair"];
const randomAdjectives = ["Smelly", "Boring", "Stupid"];
const randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
const randomWord = randomWords[Math.floor(Math.random() * 5)];

const randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!`;
console.log(randomInsult);
