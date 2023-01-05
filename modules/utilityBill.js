#! /usr/bin/env node
import inquirer from "inquirer";
const Electric = Math.ceil(Math.random() * 8000 + 1);
const Gas = Math.ceil(Math.random() * 8000 + 1);
const Phone = Math.ceil(Math.random() * 8000 + 1);
async function utility(balance) {
    const input = await inquirer.prompt([
        {
            name: "Billtype",
            type: "list",
            choices: ["Electricity", "Gas", "Phone"],
            message: "Please select your bill for payment",
        },
    ]);
    if (input.Billtype == "Electricity") {
        console.log(`Your bill amount ${Electric}`);
        balance -= Electric;
    }
    else if (input.Billtype == "Gas") {
        console.log(`Your bill amount ${Gas}`);
        balance -= Gas;
    }
    else if (input.Billtype == "Phone") {
        console.log(`Your bill amount ${Phone}`);
        balance -= Phone;
    }
    return balance;
}
export default utility;
