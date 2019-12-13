const fs = require("fs");

/** @type string[] */
const input = fs.readFileSync(
    "exo5/input1.txt",
    { encoding: "utf8" }
).replace(/\r/g, "").split("\n");

console.error(input);

ContestResponse();

function ContestResponse() {
    const [] = input[0].split(" ").map(n => parseInt(n));


}
