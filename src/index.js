// Importamos los módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const Database = require("better-sqlite3");
const db = new Database("./src/db/database.db", { verbose: console.log });

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 4000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
  let data = {};
  data = {
    ...req.body,
    id: uuidv4(),
  };

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
    response.error = "¡Oh! Parece que se ha producido un error";
  } else {
    const query = db.prepare(
      `INSERT INTO cards (uuid, palette, name, job, phone, email, linkedin, github, photo) VALUES (?,?,?,?,?,?,?,?,?)`
    );
    const result = query.run(
      data.id,
      data.palette,
      data.name,
      data.job,
      data.phone,
      data.email,
      data.linkedin,
      data.github,
      data.photo
    );

    response.success = true;
    response.cardURL =
      process.env.NODE_ENV === "production"
        ? `https://project-promo-o-module4-team1.herokuapp.com/card/${data.id}`
        : `http://localhost:4000/card/${data.id}`;
  }

  res.json(response);
});

server.get("/card/:cardId", (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE uuid = ?`);
  const foundId = query.get(req.params.cardId);

  if (foundId !== undefined) {
    res.render("card", foundId);
  } else {
    res.render("not-found");
  }
});

// Servidor de estáticos
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerPathCSS = "./src/public-react-css";
server.use(express.static(staticServerPathCSS));

// not found error
server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../src/public-react/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
