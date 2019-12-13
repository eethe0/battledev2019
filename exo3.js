const fs = require("fs");

/** @type string[] */
const input = fs.readFileSync(
    "exo3/input2.txt",
    { encoding: "utf8" }
).replace(/\r/g, "").split("\n");

console.error(input);

ContestResponse();

function ContestResponse() {
    /** @type [number, number] */
    const [nbCables, nbRequests] = input[0].split(" ").map(n => parseInt(n));
    if (nbCables > nbRequests) {
        for (let i = 0; i < nbRequests; i++) {
            console.log(i + 1);
        }
        return;
    }
    /** @type number[] */
    const out = [];
    out.length = 2501;
    out.fill(0, 0, 2501);
    /** @type number[] */
    const back = [];
    back.length = 2501;
    back.fill(0, 0, 2501);
    for (let i = 1; i < nbRequests + 1; i++) {
        const [start, end] = input[i].split(" ").map(n => parseInt(n));
        out[start] += 1;
        back[end] += 1;
    }
    console.log(out, back);
    let cableStock = nbCables;
    const output = [];
    for (let i = 0; i < 2501; i++) {
        const nbBack = back[i];
        const nbOut = out[i];
        cableStock += nbBack;
        for (let r = 0; r < nbOut; r++) {
            output.push(cableStock);
            cableStock--;
            if (cableStock < 1) {
                console.log("pas possible");
                return;
            }
        }
    }
    //console.log(output.join(" "));
}
