const fs = require("fs").promises;

let a = Math.round(Math.random() * 1000000);
const readfile = fs.readFile(`./lipsum.txt`, "utf-8")

readfile.then((data) => {
    let data2 = data.toUpperCase();
    fs.appendFile(`./content/uppercase${a}.txt`, data2, "utf-8");
    return fs.appendFile(`./filenames.txt`, `uppercase${a}.txt\n`, "utf-8")
}).then(() => {
    fs.readFile(`./content/uppercase${a}.txt`, "utf-8").then((data) => {
        let data3 = data.toLowerCase().split(".").join(".\n");
        fs.appendFile(`./content/sentence${a}.txt`, data3, "utf-8");
        return fs.appendFile(`./filenames.txt`, `sentence${a}.txt\n`, "utf-8")
    }).then(() => {
        fs.readFile(`./content/sentence${a}.txt`, "utf-8").then((data) => {
            let data4 = data.split("\n").sort().join("\n");
            fs.appendFile(`./content/sorted${a}.txt`, data4, "utf-8");
            return fs.appendFile(`./filenames.txt`, `sorted${a}.txt\n`, "utf-8")
        }).then(() => {
            let final = fs.readFile(`./filenames.txt`, "utf-8").then((data) => {
                let data5 = data.split("\n").slice(0, -1);
                data5.forEach((x) => {
                    fs.unlink(`./content/${x}`)
                })
            })
            return final
        })
    
    })
}).catch((err) => {
    console.log(err);
})