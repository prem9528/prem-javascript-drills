const fs = require("fs");

fs.readFile("./sample1.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {

        fs.appendFile(`./content/renderedSecondFile.json`, data, "utf-8", (err) => {
            if (err) {
                console.log(err)
            } else {
                fs.unlink("./sample1.json", (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fs.unlink(`./content/renderedSecondFile.json`, (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("task done");
                            }
                        })
                    }
                })
            }
        })
    }
});
