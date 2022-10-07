const fs = require("fs").promises;

const sample01 = require("./sample1.json")
let a = Math.round(Math.random() * 1000000);
const sampledir= fs.mkdir(`./test${a}`);

sampledir.then(()=>{
const randomfiles = fs.appendFile(`./test${a}/random${a}.txt`, JSON.stringify(sample01), "utf-8") 
return randomfiles
}).then(()=>{
    return fs.readdir(`./test${a}`)
}).then((files)=>{
   return files.forEach((file)=>{
        fs.unlink(`./test${a}/${file}`)
    })
}).catch((err)=>{
    console.log(err);
})