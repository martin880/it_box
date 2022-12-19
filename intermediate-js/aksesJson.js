// Read file json
const fs = require('fs');
let data = fs.readFileSync('./data.json','utf8');

let parseData = JSON.parse(data);
console.log(parseData);

console.log("List Students : ");
parseData.forEach(data => {
   console.log(`${data.id}. ${data.name}, ${data.score}`) 
});
