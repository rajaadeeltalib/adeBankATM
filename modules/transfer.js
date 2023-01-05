#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function transfer(balance) {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Please Enter account number",
        },
        {
            name: "amount",
            type: "number",
            message: "Please enter your amount",
        },
    ]);
    if (balance > answer.amount) {
        balance -= answer.amount;
    }
    else {
        console.log(chalk.redBright("you have insufficient balance"));
    }
    return balance;
}
export default transfer;
