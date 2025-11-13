const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// URL e nome do banco
const url = 'mongodb://localhost:27017';
const dbName = 'test';

// Cria a conexão com o MongoDB
async function connectDB() {
    const client = new MongoClient(url);
    await client.connect();
    console.log('✅ Conectado ao MongoDB');
    return client.db(dbName);
}

(async () => {
    const db = await connectDB();
    const collection = db.collection('items'); // nome da coleção

    // Rota GET /items -> lista todos
    app.get('/items', async (req, res) => {
        const items = await collection.find({}).toArray();
        res.json(items);
    });

    // Rota POST /items -> cria novo documento
    app.post('/items', async (req, res) => {
        const result = await collection.insertOne(req.body);
        res.json({ insertedId: result.insertedId });
    });

    // Rota GET /items/:id -> busca um item pelo ID
    app.get('/items/:id', async (req, res) => {
        try {
            const item = await collection.findOne({ _id: new ObjectId(req.params.id) });
            if (!item) return res.status(404).json({ message: 'Item não encontrado' });
            res.json(item);
        } catch (error) {
            res.status(400).json({ message: 'ID inválido' });
        }
    });

    // Rota PUT /items/:id -> atualiza um item
    app.put('/items/:id', async (req, res) => {
        try {
            const result = await collection.updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: req.body }
            );
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: 'ID inválido' });
        }
    });

    // Rota DELETE /items/:id -> remove um item
    app.delete('/items/:id', async (req, res) => {
        try {
            const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
            res.json(result);
        } catch (error) {
            res.status(400).json({ message: 'ID inválido' });
        }
    });

    // Inicia o servidor
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
})();
