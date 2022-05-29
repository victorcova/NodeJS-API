// IMPORTAÇÃO DE MÓDULOS (um pacote terceiro vindo do NPM):
const express = require("express"); // requerendo a dependencia do express
const app = express(); // instanciar o express para tudo que há nele ficar disponivel

const cors = require("cors"); // garantir que o cliente e o servidor estejam na mesma origem
app.use(cors()); // instanciando o cors

// As informações transitadas no cliente-servidor ou servidor cliente são feitas em JSON. Para melhor compreensão dessas informações deve-se intanciar
// basicamente permite que a sua API funcione sem erros - boa pratica
app.use(express.json); 

// importar rotas:

//  exportar o modulo para os outros arquivos
module.exports = app;