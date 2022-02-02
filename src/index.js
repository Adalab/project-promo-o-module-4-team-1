// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "10mb" }));

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  const data = req.body;
  const response = {};
  if (data.name) {
    response.success = true;
    response.cardURL = "http://localhost:4000/card/cardId";
  } else {
    response.success = false;
    response.error = "Error description";
  }
  res.json(response);
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
