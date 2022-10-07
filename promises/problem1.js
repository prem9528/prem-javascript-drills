const fs = require("fs").promises;

const sample01 = require("./sample1.json");
const sampledir= fs.mkdir(`./test1`);

sampledir.then(()=>{
    let x= 5;
    let array =[];
    while(x>0){
     array.push(fs.appendFile(`./test1/random${Math.round(Math.random() * 1000000)}.txt`, JSON.stringify(sample01), "utf-8"));
        x--;
    }
return Promise.all(array)
}).then(()=>{
    return fs.readdir(`./test1`)
}).then((files)=>{
    let array2=[];
   files.forEach((file)=>{
        array2.push(fs.unlink(`./test1/${file}`))
    })
    return Promise.all(array2)
}).catch((err)=>{
    console.log(err);
})