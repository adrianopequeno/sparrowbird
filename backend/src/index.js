const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//** Conectando com a base de dados extenas do MongoDB: Atlas mongoDb */
mongoose.connect(
  'mongodb+srv://projeto1:BPh9hGI8Mnbz0o1O@cluster0-nh9jc.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
  console.log(":) Server started on port 3000");
});