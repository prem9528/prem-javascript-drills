const fs = require("fs");
fs.readdir("./content", (err, files)=>{
    if(err){
        console.log(err)
    }else{
        files.forEach((a)=>{
            fs.unlink(`./content/${a}`, (err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(`files deleted  ${files.length}`);
                }

            })}
        )
    
    }
})