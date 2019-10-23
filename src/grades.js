const readlineSync = require("readline-sync");

//Homework Grades
const h1= readlineSync.question("Enter three homework grades.\n");
const h2= readlineSync.question("");
const h3= readlineSync.question("");

let AverageHw= (Number(h1) + Number(h2) + Number(h3))/3;
let FinalHw= AverageHw*.15;
//Quiz grades
const q1= readlineSync.question("Enter three quiz grades.\n");
const q2= readlineSync.question("");
const q3= readlineSync.question("");
let AverageQuiz= (Number(q1) + Number(q2) + Number(q3))/3;
let FinalQuiz= AverageQuiz*.35;
//Test grades
const t1= readlineSync.question("Enter three test grades.\n");
const t2= readlineSync.question();
const t3= readlineSync.question();
let AverageTest= (Number(t1) + Number(t2) + Number(t3))/3;
let FinalTest= AverageQuiz*.35;

console.log(FinalHw + FinalQuiz +FinalTest );
