// Importa o módulo http nativo do Node.js
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá, mundo com Node.js!\n');
});

// Define a porta e inicia
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/');
});
