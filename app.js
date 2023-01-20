const express = require ('express');
const path = require('path');
const app = express();

app.listen(3030, () => console.log('Se levanto con exito el servidor en http://www.localhost:3030'))
app.use(express.static('public'))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views/index.html')))
app.get('/turing',(req,res) => res.sendFile(path.join(__dirname, 'views/turing.html')))
app.get('/babbage',(req,res) => res.sendFile(path.join(__dirname, 'views/babbage.html')))
app.get('/clarke',(req,res) => res.sendFile(path.join(__dirname, 'views/clarke.html')))
app.get('/hamilton',(req,res) => res.sendFile(path.join(__dirname, 'views/hamilton.html')))
app.get('/hopper',(req,res) => res.sendFile(path.join(__dirname, 'views/hopper.html')))
app.get('/lovelace',(req,res) => res.sendFile(path.join(__dirname, 'views/lovelace.html')))
app.get('/barnes-lee',(req,res) => res.sendFile(path.join(__dirname, 'views/barnes-lee.html')))
