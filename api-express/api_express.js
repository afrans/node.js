// Application Programming Interface (API) for RESTful services.
// REST Representational State Transfer (REST) is an architectural style for designing networked applications.
// It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used. 
// RESTful applications use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources.

import express from 'express';

const app = express();
const port = 3000;

// rota get raiz
app.get('/', (req, res) => {
    res.send('Olá, mundo com Node.js e Express!\n');
});

// rota GET com parâmetro
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // exemplo estático — normalmente buscaria em DB
    res.send({ id, name: `Usuário ${id}` });
});

// rota POST (criar recurso)
app.post('/users', (req, res) => {
    const user = req.body; // { name: 'Anderson', ... }
    // aqui você salvaria no DB; vamos só responder com 201
    res.status(201).send({ id: 1, ...user });
});

// iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});

