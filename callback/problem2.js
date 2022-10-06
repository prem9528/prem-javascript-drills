const fs = require("fs");

fs.readFile("./lipsum.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let z = Math.round(Math.random() * 10);
        fs.appendFile(`./content/uppercase${z}.txt`, data.toUpperCase(), "utf-8", (err) => {
            if (err) {
                console.log(err)
            } else {
                fs.readdir("./content", (err, files) => {
                    if (err) {
                        console.log(err)
                    } else {
                        fs.unlink(`./filenames.txt`, (err) => {
                            if (err) {
                                console.log(err)
                            }
                        })
                        files.forEach((a) => {
                            fs.appendFile(`./filenames.txt`, `${a}\n`, "utf-8", (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            })
                            fs.readFile(`./content/${a}`, "utf-8", (err, data) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    let x = data.toLowerCase().split(".").join(".\n");
                                    fs.writeFile(`./content/${a}`, x, "utf-8", (err) => {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            fs.appendFile(`./content/sentence${z}.txt`, x, "utf-8", (err) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    fs.appendFile(`./filenames.txt`, `sentence${z}\n`, "utf-8", (err) => {
                                                        if (err) {
                                                            console.log(err);
                                                        } else {
                                                            let az = x.split("\n").sort().join("\n");
                                                            fs.appendFile(`./content/sorted${z}.txt`, az, "utf-8", (err) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                } else {
                                                                    fs.readdir('./content', (err, files) => {
                                                                        if (err) {
                                                                            console.log(err)
                                                                            return
                                                                        }
                                                                        else {
                                                                            fs.unlink(`./filenames.txt`, (err) => {
                                                                                if (err) {
                                                                                    console.log(err)
                                                                                }
                                                                            });
                                                                            files.forEach((a) => {
                                                                                fs.appendFile(`./filenames.txt`, `${a}\n`, "utf-8", (err) => {
                                                                                    if (err) {
                                                                                        console.log(err)

                                                                                    } 
                                                                                })

                                                                            })
                                                                            fs.readFile(`./filenames.txt`, "utf-8", (err, data) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    let data2 = data.split("\n").slice(0, -1);
                                                                                    console.log(data2);
                                                                                    data2.forEach((ba) => {
                                                                                        fs.unlink(`./content/${ba}`, (err) => {
                                                                                            if (err) {
                                                                                                console.log(err);
                                                                                                return
                                                                                            }else{
                                                                                                console.log("all done");
                                                                                                return
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                }
                                                                            })
                                                                        }

                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        })

                    }
                })
            }
        })
    }
});

