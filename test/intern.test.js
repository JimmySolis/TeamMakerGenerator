const Intern = require('../lib/intern')


describe('Inter', () => {
    it('should do every thing Employee did but it should have Intern info.', () => {
        const testData = {
            name : 'John',
            id : 233,
            email: 'johnqid@gmail.com',
            school : 'UCLA'
           }

           const John = new Intern(testData);

           expect(John.name).toEqual('John');
          console.log(John.name)

    })
    it('should do every thing Employee did but it should have Intern school.', () => {
        const testData = {
            name : 'John',
            id : 233,
            email: 'johnqid@gmail.com',
            school : 'UCLA'
           }

           const John = new Intern(testData);

           expect(John.school).toEqual('UCLA');
          console.log(John.school)

        })
        it('should do every thing Employee did but it should have Intern email.', () => {
            const testData = {
                name : 'John',
                id : 233,
                email: 'johnqid@gmail.com',
                school : 'UCLA'
               }
    
               const John = new Intern(testData);
    
               expect(John.email).toEqual('johnqid@gmail.com');
              console.log(John.email)
    
            })
})