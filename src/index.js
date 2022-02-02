// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const cards = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: "http://localhost:4000/card/cardId",
  };
  const responseError = {
    success: false,
    error: "Error description",
  };
  cards.push(req.body);
  res.json(responseSuccess);
});

server.get("/card/cardId", (req, res) => {
  res.send(
    `<html>
      <body>
        <h1>Hola</h1>
      </body>
    </html>`
  );
});

console.log(cards);
