#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const sleep = () => {
     return new Promise((r) =>
      {setTimeout(r,2000)});
 };

class student {
    name: string;
    age: number;
    monthlyfee: string;
   
constructor(name:string,  age:number,  monthlyfee:string){
          this.name = name;
          this.age = age;
          this.monthlyfee = monthlyfee;
     }
};

class university {
    name: string;
    students: student[] = []
     
    constructor(name: string, students: student[]){
        this.name = name;
        this.students = students;
    }

};


async function studentData() {
    const answers = await inquirer.
        prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "Name",
            message: "Write Name? \n",
        },
        {
            type: "number",
            name: "age",
            message: "Write Age? \n",
        },
        {
            type: "input",
            name: "monthlyfee",
            message: "Is monthly fee paid? type y or n\n",
        }
    ]);
    let feestatus: string;
    if(answers.monthlyfee == "y"){
         feestatus = "paid"
    }
    else{
        feestatus = "unpaid"
    }
   
    let a = new student(answers.Name, answers.age, feestatus);
    return a;
};

async function studentArray() {
let classStudents: student[] = [];
const arr =   await inquirer.prompt([
    /* To ask number of students in class */
    {
        type: "number",
        name: "dim",
        message: "Number of students? \n",
    }
]);

for (let a = 1; a <= arr.dim; a++) {
      await sleep();
    console.log(`\n "student" ${a}`)
    let newstudent = await studentData();
    if(newstudent.monthlyfee == "paid"){
    classStudents.push(newstudent);
    }
} 

await sleep();
let my_University = new university("NED University", classStudents);
return my_University;
};


let finalData = await studentArray();
console.clear();
console.log(`\n`)
console.log(chalk.blue("List of registered students:"))
console.log(`\n`)
console.log(chalk.yellow(finalData.name));
console.log(finalData.students);














