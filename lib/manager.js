const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = 'Manager';
    }

    getRole(){
        return 'Manager'
    }
}

// const Man = new Manager('SKYLER MUSK', 'AP100', 'SKM900@TS.COM', '1')
// console.log(Man)
// console.log(Man.getRole())


module.exports = Manager;