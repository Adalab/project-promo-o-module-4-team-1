// Importamos los módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const path = require('path');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '10mb' }));

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const data = req.body;
  const response = {};

  if (
    data.name === '' ||
    data.email === '' ||
    data.job === '' ||
    data.image === '' ||
    data.linkedin === '' ||
    data.github === ''
  ) {
    response.success = false;
    response.error = '¡Oh! Parece que se ha producido un error';
  } else {
    response.success = true;
    response.cardURL = 'http://localhost:4000/card/cardId';
  }

  res.json(response);
});

server.get('/card/cardId', (req, res) => {
  res.send(
    `<html>
      <body>
        <h1>Hola</h1>
      </body>
    </html>`
  );
});

// Servidores estáticos
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));
