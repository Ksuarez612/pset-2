const readlineSync = require("readline-sync");

const Width = readlineSync.question("Width: ");
const Length = readlineSync.question("Length: ");
const Conversion = 25.4;
let w= Width;
let l=Length;
let k=w*Conversion;
let s=w*Conversion;
let f= k*s;
let r=Math.round (f)
f= f.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + " -inch sheet of paper has an area of " + f + "square millimeter(s)");
