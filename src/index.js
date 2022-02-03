// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const path = require("path");

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
  if (
    data.name === "" ||
    data.email === "" ||
    data.job === "" ||
    data.image === "" ||
    data.linkedin === "" ||
    data.github === ""
  ) {
    response.success = false;
    response.error = "¡Oh! Parece que falta algún campo por rellenar";
  } else {
    const regexOnlyLetters = new RegExp("^([A-ZÁÉÍÓÚa-zñáéíóú]+[s]*)+$");
    const regexEmail = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    const regexPhone = new RegExp("^[0-9]*$");

    if (data.name.length <= 2) {
      response.success = false;
      response.error = "El nombre es demasiado corto";
    } else if (!regexOnlyLetters.test(data.name)) {
      response.success = false;
      response.error = "El nombre sólo puede contener letras";
    } else if (data.job.length <= 2) {
      response.success = false;
      response.error = "La descripción del puesto es demasiado corta";
    } else if (!regexEmail.test(data.email)) {
      response.success = false;
      response.error = "El formato del email no es válido";
    } else if (!regexPhone.test(data.phone)) {
      response.success = false;
      response.error = "El formato del teléfono no es válido";
    } else {
      response.success = true;
      response.cardURL = "http://localhost:4000/card/cardId";
    }
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

const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
