const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an employee with the name John', () => {
       const testData = {
        name : 'John',
        id : 233,
        email: 'johnqid@gmail.com',
        officeNumber : 344,
        school : 'Princente'
       }

        const John = new Employee(testData);

        expect(John.name).toEqual('John');
       console.log(John.name)
    
    })
    it('should create an employee id 223.', () => {
        const testData = {
         name : 'John',
         id : 233,
         email: 'johnqid@gmail.com',
         officeNumber : 344,
         school : 'Princente'
        }
 
         const John = new Employee(testData);
 
         expect(John.id).toEqual(233);
        console.log(John.id)
     
     })
     it('should create an employee office number 344', () => {
        const testData = {
         name : 'John',
         id : 233,
         email: 'johnqid@gmail.com',
         officeNumber : 344,
         school : 'Princente'
        }
 
         const John = new Employee(testData);
 
         expect(John.officeNumber).toEqual(344);
        console.log(John.officeNumber)
     
     })
     it('should create an employee with dirrent properties.', () => {
        const testData = {
         name : 'John',
         id : 233,
         email: 'johnqid@gmail.com',
         officeNumber : 344,
         school : 'Princente'
        }
 
         const John = new Employee(testData);
 
         expect(John.email).toEqual('johnqid@gmail.com');
        console.log(John.email)
     
     })
     it('should create an employee with dirrent properties.', () => {
        const testData = {
         name : 'John',
         id : 233,
         email: 'johnqid@gmail.com',
         officeNumber : 344,
         school : 'Princente'
        }
 
         const John = new Employee(testData);
 
         expect(John.email).toEqual('johnqid@gmail.com');
        console.log(John.email)
     
     })
})