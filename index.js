const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const writeFile = require('./src/writeFile');
// const generatHtmlFile = require('./src/generat-htmlFile');
const personal = []

const managerStarterQuestions = [
    { 
        type: 'input',
        name: 'name',
        message: "Enter Manager's NAME.",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter Manager's ID.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Manager's EMAIL.",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter Manager's OFFICE NUMBER.",
    },
];

const newEmployee = () => {
    return inquirer.prompt([
        {
            type : 'list',
            name : 'kindOfEmployee',
            message : 'What kind of employee should we add?',
            choices: [
                'Engenier',
                'Intern',
                'All Finished building Personal.'
            ]
        }
    ])
    .then(data => {
        switch (data.kindOfEmployee) {
            case value: 'Engenier';
                
                break;

            case value: 'Intern';
                
                break;

            case value: 'All Finished building Personal.';
                
                break;
        }
    })
};

const engineer = () => {
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "Enter Engineer's NAME.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Engineer's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Engineer's EMAIL.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter Engineer's GITHUB.",
        },

    ])
    .then(data => {
        // const teamMember = new Engineer(data);
        console.log(data)
    })
}

function init(){
    return inquirer.prompt(managerStarterQuestions)
}

init()
.then(newEmployee)
    
.then((data) => console.log(data))

