const fs = require('fs');
// let buffer = fs.readFileSync('abc.js');
// console.log("bin data" + buffer);
// fs.openSync("abc", "w");
// fs.writeFileSync("abc.txt", "duniya ki maa ki choot");
// fs.appendFileSync('abc.txt','bhai khush ho?');
// fs.mkdirSync("meridir");
// fs.writeFileSync("meridir/new.txt", "this is a new time");
// let content = fs.readdirSync('meridir');
// console.log(content);
// for(let i = 0; i < content.length; i++ ){
//     console.log('file', content[i], "is removed")
//     fs.unlinkSync('meridir/'+ content[i])
// }
// fs.rmdirSync('meridir');
let doesPathExist =fs.existsSync('abc.txt');
console.log(doesPathExist );