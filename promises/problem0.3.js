const fs = require("fs").promises;

const deletefile = fs.readdir(`./content`);
const randomFile = fs.readFile(`./sample1.json`, "utf-8");

let a = Math.round(Math.random() * 10);
const a01 = randomFile.then((data) => {
    const rander = fs.appendFile(`./content/rander${a}.json`, data, "utf-8")

    return rander
}).then(() => {
    const xyz = fs.unlink(`./sample1.json`)
    return xyz
}).then(()=>{
    const deletesinglefile = fs.unlink(`./content/rander${a}.json`)
        return deletesinglefile
}).catch((err) => {
    console.log(err);
})