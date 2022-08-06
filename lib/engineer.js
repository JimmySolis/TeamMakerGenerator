const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email, github)
        this.role = 'Engineer';
    }

    getGithub(){
        return this.github
    }

    getRole(){
      return 'Engineer'
    }
}


// const e1 = new Engineer('Jimmy Solis', 'ZR4555', 'JimmySolis14@gmail.com', 'JimmySolis')
// console.log(e1)

module.exports = Engineer;