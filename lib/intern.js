const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email, school)
        this.role = 'Intern';
        this.school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern'
    }
}

// const i1 = new Intern ('John Watson', 'ZR4673', 'jwats2004@gmail.com', 'UCLA')
// console.log(i1)
// console.log(i1.getRole())


module.exports = Intern;