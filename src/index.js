// Importamos los módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({ limit: "10mb" })
);
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 4000
const serverPort =
  process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(
    `Server listening at http://localhost:${serverPort}`
  );
});

let data = {};
let savedCards = [];

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  data = {
    ...req.body,
    id: uuidv4(),
  };
  console.log(data.id);
  savedCards.push(data);
  const response = {};

  if (
    data.name === "" ||
    data.email === "" ||
    data.job === "" ||
    data.image === "" ||
    data.linkedin === "" ||
    data.github === ""
  ) {
    response.success = false;
    response.error =
      "¡Oh! Parece que se ha producido un error";
  } else {
    response.success = true;
    response.cardURL = `http://localhost:4000/card/${data.id}`;
  }

  res.json(response);
});

server.get(
  "/card/:cardId",
  (req, res) => {
    const foundId = savedCards.find(
      (card) =>
        card.id === req.params.cardId
    );
    if (foundId !== undefined) {
      res.render("card", data);
    } else {
      res.render("not-found");
    }
  }
);

// Servidor de estáticos
const staticServerPath =
  "./src/public-react";
server.use(
  express.static(staticServerPath)
);

const staticServerPathCSS =
  "./src/public-react-css";
server.use(
  express.static(staticServerPathCSS)
);
