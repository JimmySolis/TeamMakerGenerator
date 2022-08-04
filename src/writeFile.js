const fs = require('fs');



const dataTransfer = () =>
new Promise((resolve, rejects) => {

  fs.writeFile('./dist/index.html', theHtml, (err) => {
    if(err){
      rejects(err);
    }
    resolve(console.log(`HTML MADE!`))
  });
 })



module.exports = dataTransfer;