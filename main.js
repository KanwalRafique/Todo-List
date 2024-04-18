#! user/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgGreenBright("\n \t WELCOME TO MY TODOS\n"));
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        }
    ]);
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add items in list",
            validate: function (input) {
                if (input.trim() == "") {
                    return "please enter a non valid item.";
                }
                return true;
            }
        });
        if (addTodo.todo.trim() !== "") {
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
    }
    if (ans.select === "Update") {
        let UpdateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update  items in list",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add items in list",
        });
        let newTodo = todos.filter(val => val !== UpdateTodo.todos);
        todos = [...newTodo, addTodo.todo];
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "View") {
        console.log(chalk.redBright("***** TO-DO LIST *****"));
        console.log(todos);
    }
    if (ans.select === "Delete") {
        let DeleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "select items in delete",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== DeleteTodo.todos);
        todos = [...newTodo];
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Exit") {
        console.log(chalk.bgYellowBright("Exiting program..."));
        condition = false;
    }
}
// let todos =[];
// let condition =true;
// while( condition)
// {
//      let addTask = await inquirer.prompt([
//     {
//        name: 'todo',
//        typr:'input',
//        message:" What  you want to add in your Todos?" 
//     },
//     {
//         name:'addMore',
//         type:'confirm',
//         message:" Do you want  to add more?",
//         default:"false"
//     },
//     {
//         name:'detete',
//         type:'confirm',
//         message:" Do you want delete anything?",
//         default:"false"
//     },
//     {
//         message: "Change Todos/Update",
//         name: "addtodo",
//         type: "input",
//     }
// ]);
// todos.push(addTask.todo);
// condition=addTask.addMore
// console.log(todos);
// }
