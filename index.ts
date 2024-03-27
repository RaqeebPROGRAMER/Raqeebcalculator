#! /usr/bin/env node
import inquirer from "inquirer";


const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multipilacation", "Division"],
  },
]);

//conditinal statement
if (asnwer.operator === "Addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operator === "Substraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator === "Multipilacation") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operator === "Division") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);
} else { 
  console.log("please select valid operator")
}
