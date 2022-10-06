const fs = require("fs");

fs.readFile("./sample1.json","utf-8",(err, data)=>{
if(err){
    console.log(err);
}else{
    let a = Math.round(Math.random() * 10);
    fs.appendFile(`./content/rendered${a}.json`, data, "utf-8", (err)=>{
        if(err){
            console.log(err)
        }
    })
}
})