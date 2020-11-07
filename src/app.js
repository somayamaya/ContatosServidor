const express = require('express');
const app = express();

const cors = require('cors');

/*const database = require('./models/repository');
database.connect();*/

const index = require('./routes/index');
//const contatos = require('./routes/contatosRoute');

app.use(cors());
app.use(express.json());
app.use('/', index);
//app.use('/contatos', contatos)

module.exports = app;
