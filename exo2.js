const fs = require("fs");

/** @type string[] */
const input = fs.readFileSync(
    "exo2/input2.txt",
    { encoding: "utf8" }
).replace(/\r/g, "").split("\n");

console.error(input);

ContestResponse();

function ContestResponse() {
    /** @type number[] */
    const lengths = input.map(n => parseInt(n));
    const min = Math.min(...lengths);
    let sum = 0;
    for (const l of lengths) {
        sum += l - min;
    }
    console.log(sum);
}
