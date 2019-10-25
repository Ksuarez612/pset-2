const readlineSync = require("readline-sync");

const hourlywage = readlineSync.question("\nHourly Wage: ");
const mon= readlineSync.question("\nMonday: ");
const tue= readlineSync.question("Tuesday: ");
const wed= readlineSync.question("Wednesday: ");
const thu= readlineSync.question("Thursday: ");
const fri= readlineSync.question("Friday: ");
const sat= readlineSync.question("Saturday: ");
const sun= readlineSync.question("Sunday: ");

let money= (Number(mon)+Number(tue)+Number(wed)+Number(thu)+Number(fri)+Number(sat)+Number(sun)) * hourlywage;

money= money.toFixed(2);

console.log("\nYou'll make $" + money + " this week.");
