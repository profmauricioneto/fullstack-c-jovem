const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (error, data) => {
    if (error) {
      res.status(404).send("Arquivo não encontrado.");
    } else {
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(data);
    }
  });
});

// enviando na rota raiz
// app.get('/', (req, res) => {
//     res.json([
//         { message: "Hello World from NodeJS"},
//         { message: "como é bom"},
//         { message: "programar"},
//         { message: "para backend"}
//     ]);
// });

// servidor express
app.listen(port, () => {
  console.log("Servidor executando...");
  console.log(`URL: http://localhost:${port}`);
});
