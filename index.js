const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generatHtml = require('./src/generat-htmlFile');
const writeFile = require('./src/writeFile')
const personel = []


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
            case 'Engenier':
             engineerPersonel();
                break;

            case 'Intern':
             internPersonel();
                break;

            case 'All Finished building Personal.':
                collectedDataForTransfer();
                break;
        }
    })
};

const engineerPersonel = () => {
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
        const teamMember = new Engineer(data);
        console.log(teamMember)
        personel.push(teamMember)
        newEmployee();
    })
}


const internPersonel = () => {
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: "Enter Intern's NAME.",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Intern's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Intern's EMAIL.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's SCHOOL.",
        },

    ])
    .then(data => {
        const teamMember = new Intern(data);
        console.log(teamMember)
        personel.push(teamMember)
        newEmployee();
    })
}


function init(){
    inquirer.prompt(managerStarterQuestions)
    .then(data => {
        const manager = new Manager(data)
        personel.push(manager)
        
    })
    .then(newEmployee) 
}


const collectedDataForTransfer = () => {
    generatHtml(personel);
      

}

init()






