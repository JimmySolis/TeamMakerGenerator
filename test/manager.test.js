const Manager = require('../lib/manager')

describe('Manager', () =>{
    it('should do every thing Employee did but it should have Manager office number.', () => {
        const testData = {
            name : 'John',
            id : 233,
            email: 'johnqid@gmail.com',
            officeNumber : 234
           }

           const John = new Manager(testData);

           expect(John.officeNumber).toEqual(234);
          console.log(John.officeNumber)
    })
    it('should do every thing Employee did but it should have Manager name.', () => {
        const testData = {
            name : 'John',
            id : 233,
            email: 'johnqid@gmail.com',
            officeNumber : 234
           }

           const John = new Manager(testData);

           expect(John.name).toEqual('John');
          console.log(John.name)
    })
    it('should do every thing Employee did but it should have Manager id.', () => {
        const testData = {
            name : 'John',
            id : 233,
            email: 'johnqid@gmail.com',
            officeNumber : 234
           }

           const John = new Manager(testData);

           expect(John.id).toEqual(233);
          console.log(John.id)
    })
})