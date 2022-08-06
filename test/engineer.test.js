const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    it('should do every thing Employee did but it should have Engineer github username.', () => {
       const testData = {
        name : 'John',
        id : 233,
        email: 'johnqid@gmail.com',
        github : 'Jqid34'
       }

        const John = new Engineer(testData);

        expect(John.name).toEqual('John');
       console.log(John.name)
    
    })
    it('should create an Engineer id 223.', () => {
        const testData = {
         name : 'John',
         id : 555,
         email: 'johnqid@gmail.com',
         officeNumber : 344,
         school : 'Princente',
         github : 'Jqid34'
        }
 
         const John = new Engineer(testData);
 
         expect(John.id).toEqual(555);
        console.log(John.id)
     
     })
     it('should create an Engineer with an email.', () => {
        const testData = {
         name : 'John',
         id : 233,
         email: 'johnqid@gmail.com',
         github : 'Jqid34'
        }
 
         const John = new Engineer(testData);
 
         expect(John.email).toEqual('johnqid@gmail.com');
        console.log(John.email)
     
     })
     it('should create an Engineer  with dirrent properties.', () => {
        const testData = {
         name : 'John',
         id : 233,
         email: 'johnqid@gmail.com',
         github : 'Jqid34'
        }
 
         const John = new Engineer(testData);
 
         expect(John.github).toEqual('Jqid34');
        console.log(John.github)
     
     })
})