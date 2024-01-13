const express = require("express");
const app = express();
const connection = require("./database/database");
const Tecnologia = require("./database/tecnologias_model");
const bodyParser = require("body-parser");

//Database

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão realizada com sucesso")
    })
    .catch((msgErro) =>{
        console.log(msgErro);
    })


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/credits", (req, res) => {
    Tecnologia.findAll({ raw: true, order:[
        ['id','DESC']
    ]}).then(tecnologias => {
        //console.log(tecnologias);
        res.render("credits",{
            tecnologias: tecnologias
        });
    })
    
});

app.get("/inserir", (req, res) => {
    res.render("inserir");
});

app.post("/inserirDados", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Tecnologia.create({
        titulo:titulo,
        descricao:descricao
    }).then(()=>{
        res.redirect("/credits");
    })
});

app.listen(3002, () => {
    console.log("server running port: 3002")
});