const fs = require("fs");

/** @type string[] */
const input = fs.readFileSync(
    "exo1/input1.txt",
    { encoding: "utf8" }
).replace(/\r/g, "").split("\n");

console.error(input);

ContestResponse();

function ContestResponse() {
    const N = parseInt(input[0]);
    /** @type [string,number] | null */
    let minimum;
    for (let i = 1; i < input.length; i++) {
        const current = input[i].split(" ");
        current[1] = parseInt(current[1]);
        if (
            !minimum ||
            current[1] < minimum[1]
        ) {
            minimum = current;
        }
    }
    console.log(minimum[0]);
}
