// const a = {
//   average: (a, b) => {
//     console.log((a + b) / 2);
//   },
//   precent: (a, b) => {
//     console.log((a / b) * 100);
//   },
// };

// const fs = require("fs");
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     return err;
//   }

//   console.log(data);
// });
// const a = "this is a ";

// fs.writeFile("./sample.txt", a, () => {
//   console.log("written");
// });
// console.log(a);
// console.log("hi");

// const path = require("path");

// const a = path.extname("/playground/Nodejs/index.js");
// const a = path.basename("/playground/Nodejs/index.js");
// console.log(a);

// const os = require("os");
// import os from "os";
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.platform());

// const pokemon = require("pokemon");

// console.log(pokemon.random());
const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<H1>hello this about</H1>");
  }
  if (req.url === "/contact") {
    return res.end("<H1>hello this contact</H1>");
  }
  if (req.url === "/blog") {
    return res.end("<H1>hello this blog</H1>");
  }
  if (req.url === "/me") {
    return res.end("<H1>hello this me</H1>");
  } else {
    return res.end("<H1>404/H1>");
  }
});
server.listen(PORT, () => {
  console.log(`server started `);
});
