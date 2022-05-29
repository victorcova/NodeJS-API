const app = require("./src/app") // Trazendo a exportação (importando) do APP que foi feita lá no app.js

const PORT = 3030; // abrindo portas no PC para rodar meu servidor (exs.: 1313, 3000, 3030, 3333, 6000, 6060, etc.)


app.listen(PORT, () => {   //criando um servidor na própria máquina
    console.log(`Servidor rodando na porta ${PORT}`);
}) 