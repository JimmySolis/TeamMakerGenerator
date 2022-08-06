
const Engineer = require('../lib/engineer')
const Manager = require('../lib/manager')
const writeFile = require('./writeFile')


const makeRoosterOneByOne = (personel) => {
  const rooster = []
    for (let i = 0; i < personel.length; i++) {
      let person =`<div class="fullContainer">
                   <div class="topContainer">
                   <h4>${personel[i].name}</h4>
                   <h3><span>`
      if(person[i].getRole() === 'Manager'){
        person += `💼 <span> ${person[i].role}`
      }else if(person[i].getRole() === 'Engineer'){
        person += `⚙️ <span> ${person[i].role}`
      }else{
        person += `🎓 <span> ${person[i].role}`
      }

      person += `<h3> 
                </div>
                <div class="bottomContainer">
                <ul>
                <li class="decore">ID #:
                ${person[i].id}
                </li>
                <li class="decore"> Email:
                <a href="mailto:${person[i].email}">${person[i].email}</a>
                </li>
                `
      if(person[1].officeNumber){
        person += `<li class="decore">Office Number: ${person[i].officeNumber}</li>`
      }else if(person[i].username.username){
        person += `<li class="decore"> GitHub Username: ${person[i].username}`
      }else{
        person += `<li class="decore"> School: ${person[i].shcool}`
      }
       
      person += `</ul>
                </div>
                </div>`;
     console.log(person)
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
