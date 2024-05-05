#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan("Welcome To Your Atm"));
let myBalance = 100000;
const myPin = 2468;
let pin = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pin.pin === myPin) {
    console.log(chalk.green("Correct pin"));
    let option = await inquirer.prompt({
        name: "operation",
        message: "Select operation to perform",
        type: "list",
        choices: ["withdraw", "deposit", "balance"],
    });
    console.log(option);
    if (option.operation === "withdraw") {
        let amount = await inquirer.prompt({
            name: "withdraw",
            message: "Enter amount you want to withdraw",
            type: "number",
        });
        if (amount.withdraw > myBalance) {
            console.log(chalk.red("Insufficient balance"));
        }
        else {
            myBalance = myBalance - amount.withdraw;
            console.log(chalk.green(`Your remaining balance is: $ ${myBalance} after withdrawl`));
        }
    }
    else if (option.operation === "balance") {
        console.log(chalk.green(`Your current balance is $ ${myBalance}`));
    }
    else if (option.operation === "deposit") {
        let amount = await inquirer.prompt({
            name: "deposit",
            message: "Enter amount to deposit",
            type: "number",
        });
        myBalance = myBalance + amount.deposit;
        console.log(chalk.green(`Your balance is:$ ${myBalance} after deposit`));
    }
}
else {
    console.log(chalk.red("Incorrect pin"));
}
