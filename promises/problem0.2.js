const fs = require("fs").promises;

const deletefile = fs.readdir(`./content`);

deletefile.then((files) => {
    files.forEach((file) => {
        const deletesinglefile = fs.unlink(`./content/${file}`)
        return deletesinglefile

    })

}).catch((err) => {
    console.log(err);
})