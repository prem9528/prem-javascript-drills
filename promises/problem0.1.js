const fs = require("fs").promises;

const randomFile = fs.readFile(`./sample1.json`, "utf-8");

let a = Math.round(Math.random() * 10);
randomFile.then((data)=> {
    const rander= fs.appendFile(`./content/rander${a}.json`, data, "utf-8")
    
    return rander
}).catch((err)=>{
console.log(err);
})