#! usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
    USD: 1, // base currency
    EURO: 0.91,
    GRP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR" ]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR" ]
        },
        {
            name: "Amount",
            message: "Enter your Amount",
            type: "number"
        }
    ]
);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let Amount = user_answer.Amount;
let baseAmount = Amount/fromAmount;
let convertedAmount = baseAmount * toAmount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(Amount);
console.log(Math.round(convertedAmount));


