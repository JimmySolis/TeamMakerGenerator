

const Engineer = require('../lib/engineer')
const Manager = require('../lib/manager')
const writeFile = require('./writeFile')


const makeRoosterOneByOne = (personel) => {
  const rooster = []
    for (let i = 0; i < personel.length; i++) {

      let person =
      `<div class="fullContainer">
                   <div class="topContainer">
                   <h4>${personel[i].name}</h4>
                   <h3><span>`
      if(personel[i].role === 'Manager'){
        person += `💼 <span> ${personel[i].role}`
      }else if(personel[i].role === 'Engineer'){
        person += `⚙️ <span> ${personel[i].role}`
      }else{
        person += `🎓 <span> ${personel[i].role}`
      }

      person += `<h3> 
                </div>
                <div class="bottomContainer">
                <li class="decore">ID #:
                ${personel[i].id}
                </li>
                <li class="decore"> Email:
                <a href="mailto:${personel[i].email}">${personel[i].email}</a>
                </li>
                `
      if(personel[i].officeNumber){
        person += `<li class="decore">Office Number: ${personel[i].officeNumber}</li>`
      }else if(personel[i].github){
        person += `<li class="decore"> GitHub Username: <a href= "https://github.com/${personel[i].github}" target="_blank">${personel[i].github}</a></li>`
      }else if(personel[i].school){
        person += `<li class="decore"> School: ${personel[i].school}</li>`
      }else{
        person += ``
      }
       
      person += `
                </div>
                </div>`;
     rooster.push(person)
     console.log(rooster)

    const codeforHtml =`<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap">
      <link rel="stylesheet" href="/dist/style.css">
      <title>TEAM MAKER GENERATOR</title>
      </head>
      <body>
      
      <header><h1>Team Roster</h1></header>
      <main>
      ${rooster.join('')}            
      </main>
      
      </body>
      </html>`;
  
     
      writeFile(codeforHtml);
    
    }

}

module.exports = makeRoosterOneByOne;
