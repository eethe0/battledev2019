const fs = require("fs");

/** @type string[] */
const input = fs.readFileSync(
    "exo4/input2.txt",
    { encoding: "utf8" }
).replace(/\r/g, "").split("\n");

console.error(input);

ContestResponse();


function ContestResponse() {
    const [nbStones, nbPowders, capacity] = input[0].split(" ").map(n => parseInt(n));
    const items = [];
    // stones
    for (let i = 0; i < nbStones; i++) {
        const [value, weight] = input[i + 1].split(" ").map(n => parseInt(n));
        items.push({ value, weight });
    }
    // powders
    for (let i = 0; i < nbPowders; i++) {
        const [value, weight] = input[i + 1 + nbStones].split(" ").map(n => parseInt(n));
        for (let w = 0; w < weight; w++) {
            items.push({ value, weight: 1 });
        }
    }
    items.sort(
        (a, b) => (b.value / b.weight) - (a.value / a.weight)
    );
    let contentWeight = 0;
    let contentValue = 0;
    for (const item of items) {
        if (contentWeight + item.weight <= capacity) {
            contentWeight += item.weight;
            contentValue += item.value;
        }
    }
    console.log(contentValue, contentWeight, capacity);
}
