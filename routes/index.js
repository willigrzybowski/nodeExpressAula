const express = require('express'); //serve para o app enxergar o framework
const router = express.Router(); //para linkar as funcionalidades do router

//mostrar a index.ejs
router.get('/', async (req, res) => {
    res.render("base",{
        title: "Home", //titulo da pag
        view: "index" //A página que será mostrada
    });    //criação da rota do show (Mostrar)
});

router.get('/quemsomos', async (req, res) => {
    res.render("base",{
        title: "Quem Somos", //titulo da pag
        view: "quemsomos" //A página que será mostrada
    });    //criação da rota do show (Mostrar)
});

module.exports = router; //exportar as rotas
