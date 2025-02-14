const express = require('express');
const app = express();

const PORT = 3000;

let id = 3;
let produtos = [
    {id: 1, nome: 'produto 1', preco: '100', descricao: 'descricao do produto 1'},
    {id: 2, nome: 'produto 2', preco: '200', descricao: 'descricao do produto 2'},
    {id: 3, nome: 'produto 3', preco: '300', descricao: 'descricao do produto 3'}
];

const logMiddleware = (req, res, next) => {
    console.log(`${new Date()} - ${req.method} - ${req.url}`);
    next();
};

// transmissao de dados via JSON
app.use(logMiddleware);
app.use(express.json());

// na rota GET /produtos - retorna todos os produtos salvos
app.get('/produtos', (req, res) => {
    if (!produtos) {
        res.status(500).json({message: 'Não foi possível encontrar os produtos.'})
    } else {
        res.status(200).json(produtos);
    }
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
    const produto = {id: ++id, nome, preco, descricao };
    produtos.push(produto);
    res.status(201).json(produto);
});

// rota DELETE /produtos/:id - apagar um recurso de produtos
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((prod) => prod.id === id);
    if (!index) {
        res.status(404).json({message:'produto não encontrado.'})
    } else {
        produtos.splice(index, 1);
        res.status(200).json({ message: 'produto deletado!'});
    }
});

// rota PUT /produtos/:id - atualizar um recurso de produto
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((prod) => prod.id === id);
    if(!produto) {
        res.status(404).json({ message:'produto não encontrado.' });
    } else {
        const {nome, preco, descricao} = req.body;
        produto.nome = nome || produto.nome;
        produto.preco = preco || produto.preco;
        produto.descricao = descricao || produto.descricao;

        res.status(200).json(produto);
    }
});

// rota raiz
app.get('/', (req, res) => {
    res.send('<h1>Utilizando Rotas</h1>');
});

// servidor
app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});