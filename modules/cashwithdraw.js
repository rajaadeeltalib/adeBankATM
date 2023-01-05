#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function otherAmount(balance) {
    const otherAmt = await inquirer.prompt([
        {
            name: "otherAmount",
            type: "number",
            message: "Please enter your amount",
        },
    ]);
    if (otherAmt.otherAmount < balance) {
        balance -= otherAmt.otherAmount;
    }
    else {
        console.log(chalk.redBright("You have insufficient balance"));
        await otherAmount(balance);
    }
    return balance;
}
async function cashwithdraw(balance) {
    const answer = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: [
                "500",
                "1000",
                "5000",
                "10000",
                "15000",
                "20000",
                "25000",
                "otherAmount",
            ],
            message: "Please Select your amount",
        },
    ]);
    switch (answer.amount) {
        case "500":
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "1000":
            if (balance > Number(answer.amount)) {
                balance -= 1000;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "5000":
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "10000":
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "15000":
            if (balance > Number(answer.amount)) {
                balance -= 15000;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "20000":
            if (balance > Number(answer.amount)) {
                balance -= 20000;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "25000":
            if (balance > Number(answer.amount)) {
                balance -= 25000;
                console.log(`Please wait your transaction is processing`);
                break;
            }
            else {
                console.log(chalk.redBright("You have insufficient balance"));
            }
        case "otherAmount":
            balance = await otherAmount(balance);
            console.log(`Please wait your transaction is processing`);
            break;
    }
    return balance;
}
export default cashwithdraw;
