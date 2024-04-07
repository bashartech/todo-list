#! /usr/bin/env node  
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 320420;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "Check balance"],
        },
    ]);
    if (operationAns.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        // assign and subtract
        myBalance -= amountAns.amount;
        console.log("your remaining balance is " + myBalance);
    }
    else if (operationAns.Operation === "Check balance") {
        console.log("your balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}
