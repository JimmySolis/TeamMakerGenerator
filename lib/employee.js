class Employee {
    constructor(data){
    const { name, id, email, school, officeNumber, github} = data;
        this.name = name;
        this.id = id;
        this.email = email;
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.github = github;
        this.school = school;
        this.role = 'Employee';
        
    }

    getName(){
        return this.name

    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;