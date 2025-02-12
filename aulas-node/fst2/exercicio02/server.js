const express = require('express');
const app = express();

const PORT = 3000;

let id = 3;
let produtos = [
    {id: 1, nome: 'produto 1', preco: '100', descricao: 'descricao do produto 1'},
    {id: 2, nome: 'produto 2', preco: '200', descricao: 'descricao do produto 2'},
    {id: 3, nome: 'produto 3', preco: '300', descricao: 'descricao do produto 3'}
];

// transmissao de dados via JSON
app.use(express.json());

// na rota GET /produtos - retorna todos os produtos salvos
app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

// na rota GET /produtos/:id - retorna um produto especificado pelo id
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((prod) => prod.id === id);
    if (!produto) {
        return res.status(404).json({ message: 'produto não encontrado!' })
    }
    res.status(200).json(produto);
});

// rota POST /produtos - adicionando um novo produto no array de produtos
app.post('/produtos', (req, res) => {
    const { nome, preco, descricao } = req.body;
    const produto = {id: id++, nome, preco, descricao };
    produtos.push(produto);
    res.status(201).json(produto);
});

// rota raiz
app.get('/', (req, res) => {
    res.send('<h1>Utilizando Rotas</h1>');
});

// servidor
app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});