const fs = require('fs');




const writeFile  = (codeforHtml) =>
new Promise((resolve, rejects) => {

  fs.writeFile('./dist/index.html', codeforHtml, (err) => {
    if(err){
      rejects(err);
    }
    resolve(console.log(`HTML MADE!`))
  });
 })

 module.exports = writeFile;
