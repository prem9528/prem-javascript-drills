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
}).catch((err) => {
    console.log(err);
})

const a02 = deletefile.then((files) => {
    files.forEach((file) => {
        const deletesinglefile = fs.unlink(`./content/${file}`)
        return deletesinglefile

    })

}).catch((err) => {
    console.log(err);
})

const finalpromise= Promise.all([a01,a02])
return finalpromise;