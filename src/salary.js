const readlineSync = require("readline-sync");

const annual= Number(readlineSync.question("\nAnnual salary: "));

const four= 0.07;
const fed= 0.157;
const sta= 0.0447;
const sosc=  0.062;
const mt= 0.0145;

const salary= annual * (1-four);
const tax= fed + sta + sosc + mt;
let duc2 = (1-tax) * salary;
let th= duc2/24;

th= th.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour take-home pay check will be $" + th + ".");
