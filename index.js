const express = require ('express');

const server = express();

const tarefa = [
    {
        id: 1,
        descricao: "Comprar pao",
        finalizado: false
    }
];

server.get('/tarefas', function (request, response)
{
    return response.json(tarefas);
})

server.listen(process.env.PORT || 3000);