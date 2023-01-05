#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import cashwithdraw from "./cashwithdraw.js";
import transfer from "./transfer.js";
import utility from "./utilityBill.js";

async function anotherTransaction() {
  const OTrans = await inquirer.prompt([
    {
      name: "otherTrans",
      type: "list",
      choices: ["Yes", "No"],
      message: "Do you want to perform another Transaction?",
    },
  ]);
  return OTrans.otherTrans;
}
async function mainScreen(balance: number) {
  do {
    const options = await inquirer.prompt([
      {
        name: "menu",
        type: "list",
        choices: [
          "Balance Inquiry",
          "Cash Withdrawl",
          "Funds Transfer",
          "Bill Payments",
          "Exit",
        ],
        message: "Please Select your operation (use arrow keys)",
      },
    ]);

    switch (options.menu) {
      case "Balance Inquiry":
        console.log(
          chalk.yellow(`Your Current Account Balance Is: ${balance}`)
        );
        break;

      case "Cash Withdrawl":
        balance = await cashwithdraw(balance);
        console.log(
          chalk.yellow(
            `Your transaction is succesfull and your new balance is: ${balance}`
          )
        );

        break;

      case "Funds Transfer":
        balance = await transfer(balance);
        console.log(
          chalk.yellow(
            `Your transaction is succesfull and your new balance is: ${balance}`
          )
        );
        break;

      case "Bill Payments":
        balance = await utility(balance);
        console.log(
          chalk.yellow(
            `Your transaction is succesfull and your new balance is: ${balance}`
          )
        );
        break;

      case "Exit":
        anothertran = "No";
        break;
    }
    if (options.menu !== "Exit") {
      var anothertran = await anotherTransaction();
    }
    if (anothertran == "No") {
      console.log(chalk.yellow("Thank you for using our ATM"));
    }
  } while (anothertran != "No");
  {
  }
}

export default mainScreen;
