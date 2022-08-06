
const writeFile = require('./writeFile')


const makeRoosterOneByOne = (personel) => {
  const rooster = []
    for (let i = 0; i < personel.length; i++) {
      let person = personel[i];
      console.log(person)
     rooster.push(person)
     console.log(rooster)

      const codeforHtml =`<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      </head>
      <body>
      
      <header><h1>${rooster}</h1></header>
      <main>
      
      </main>
      
      </body>
      </html>`;
  
     
    return writeFile(codeforHtml)
    
    }
    

}

module.exports = makeRoosterOneByOne;
