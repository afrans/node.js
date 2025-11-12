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

// iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});

