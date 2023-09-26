const express = require('express');
const server = express();
const router = require ("./routes/index");
const morgan = require("morgan");

server.use(express.json()); //la info que llega en formato json la parseamos a html.
server.use(morgan("dev"));

server.use((req, res, next) => {  //con todo esto le damos los permisos (scor) para q el front acceda al back
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE' 
   );
   next();
});

server.use("/rickandmorty", router); //este middleware agrega el string /rickandmorty antes de cada ruta

module.exports = server;