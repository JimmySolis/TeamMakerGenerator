const fs = require('fs');




fs.writeFile('./dist/index.html', JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );