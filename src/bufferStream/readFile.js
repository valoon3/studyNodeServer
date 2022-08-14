const fs = require('fs').promises;

let txt = '';

// fs.readFile('./readMe.txt', async (err, data) => {
//     console.log(data);
//     console.log(data.toString())
//     txt = await data.toString();
// })

fs.readFile('./readMe.txt')
    .then((data) => {
        console.log(data.toString())
    })
    .catch((err) => {

    })