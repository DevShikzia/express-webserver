import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import hbs from 'hbs';

import * as dotenv from 'dotenv'
dotenv.config()


const app = express();
const port = process.env.PORT;



const __filename = fileURLToPath(import.meta.url); // alternativa al usar moludos para path.join(__dirname) 
const __dirname = path.dirname(__filename);



  /*       Handlebar                */

// Establezco el motor de plantillas en express
app.set('view engine', 'hbs'); 
//Partials
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home',{
        nombre: "Node",
        titulo: "Repaso Express"
    });
});
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: "Node",
        titulo: "Repaso Express"
    });
});
app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: "Node",
        titulo: "Repaso Express"
    });
});

/*  
      
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/elements', (req, res) => {
      res.sendFile(__dirname + '/public/elements.html')
});

app.get('/generic', (req, res) => {
      res.sendFile(__dirname + '/public/generic.html')
});
*/
app.get('*', (req, res) => {
  res.send('Page not found')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })