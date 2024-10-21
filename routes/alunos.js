const express = require('express'); //serve para o app enxergar o framework
const router = express.Router(); //para linkar as funcionalidades do router

//listar as categorias - show.ejs
router.get('/', async(req, res) => {
    res.render("base",{
        title: "Alunos", //titulo da pag
        view: "alunos/show" //A página que será mostrada
    });    //criação da rota do show (Mostrar)
});

//add categorias - add.ejs
router.get('/add', async(req, res) => {
    res.render("base",{
        title: "Adicionar Alunos", 
        view: "alunos/add" 
    });    //criação da rota do add (adicionar)
});

//editar categoias - edit.ejs
router.get('/edit', async(req, res) => {
    res.render("base",{
        title: "Editar Alunos", 
        view: "alunos/edit" 
    });    //criação da rota do edit (editar)
});

module.exports = router;
