const express = require("express");
const app = express();
//const connection = require("./database/database");

//Database
/*
connection
    .authenticate()
    .then(() =>{
        console.log("Conexão realizada com sucesso")
    })
    .catch((msgErro) =>{
        console.log(msgErro);
    })
*/

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/credits", (req, res) => {
    res.render("credits");
});


app.listen(3002, () => {
    console.log("server running port: 3002")
});