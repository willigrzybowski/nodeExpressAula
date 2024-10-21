const express = require("express");
const path = require("path"); //trabalhar com os caminhos das pag abertas
const app = express(); //criando objeto app
 
// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); 
 
// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
app.use(express.static(path.join(__dirname,'public')));
 
// Rotas para alunos
const alunosRouter = require("./routes/alunos");
 
app.use("/alunos", alunosRouter);
 
// Iniciar o servidor e sincronizar com o banco de dados
 
app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});
