#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.bold.bgCyanBright('\t\t\t*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*     Welcome    *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* '));
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.italic.bgBlueBright("\t\t\t^_^_^_^_^_^_^_^_^_^_^  Whom Would You Like To Interact With ? ^_^_^_^_^_^_^_^_^_^_^"),
                choices: ["staff", "student", "exit"]
            }
        ]);
        if (ans.select == "staff") {
            console.log(chalk.bold.bgMagentaBright('\t\t\t>>> You Have Approached The Staff Member. Please Feel Free To Ask Any Query !!! >>>'));
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.bold.bgYellowBright("\t\t\t<<<<<<<<<<<<<<< Enter The Students Names  You Want To Engage with : <<<<<<<<<<<<<<"),
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.bgGreenBright(`\t\t\t.*.*.*.*.*.*.*.*.*  Hello I Am ${name.name}. I Am Student Of GIAiC !!! *.*.*.*.*.*.*.*.*.*`));
                console.log(chalk.bold.bgRedBright('\t\t\t  <><><><><><><><><><><><><>     New Student Added     ><><><<><><<><><><><><><><>'));
                console.log(chalk.bold.bgBlue('\t\t\t .....................           Current Student List      : ....................'));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bgBlueBright(`\t\t\t=*=*=*=*=*=*=*     Hello I Am ${student.name}. Nice To See You Again !!!     =*=*=*=*=*=*=*`));
                console.log(chalk.bgMagentaBright('\t\t\t***,,,***,,,***,,,***      Existing Student List     ***,,,***,,,***,,,***,,,***'));
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.bgRedBright('\t\t\t  ||====||====||====           Exiting The Program...          ====||====||====||  '));
            process.exit();
        }
    } while (true);
};
programStart(persons);
