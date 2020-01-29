const express = require("express");
const morgan = require("morgan")
const app = express();
const path = require("path");

//seting declarando puerto
app.set('port', 3000);
app.set('views', path.join(__dirname,'views'));
// app.engine('html', require('ejs').renderFile); Esto se debe borrar 
app.set('view engine','ejs');
//milddlewares

//router
app.use(require('./routes/index'));

//static files

//listenig the server lo que escucha el servidor
app.listen(app.get('port'), () => 
{
    console.log("server on port", app.get('port'));
    
});