let g = require("./dist/main");

let x = new g.Engine();
console.log(x.render("./file.html", { "title": "Saber", "age": 21 }));