const express = require('express');
const app = express();

const PORT = 3000;
let id = 4;
let produtos = [
    {id: 1, nome: "Carro", preco: 200000, descricao: "SUV do ano!"},
    {id: 2, nome: "Manga Rosa", preco: 5, descricao: "Manga rosa bem madura"},
    {id: 3, nome: "Shampoo", preco: 40, descricao: "Shampoo da Elsevier"},
    {id: 4, nome: "Barril", preco: 1000, descricao: "Barril do Chaves"},
];

// middleware para log de requests
const logRequests = (req, res, next) => {
    console.log(`${new Date()} - ${req.method} - ${req.url}`);
    next();
};

app.use(express.json());
app.use(logRequests);

// GET /produtos - Listar todos os produtos
app.get('/produtos', (req, res) => {
    if (!produtos) {
        res.status(500).json({message: "erro na coleta de dados."})
    } else {
        res.status(200).json(produtos);
    }
});

// GET /produtos/:id - Apresentar o produto pelo id
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produto = produtos.find((prod) => prod.id === id);
    if (!produto) {
        res.status(404).json({message: "produto não encontrado!"});
    } else {
        res.status(200).json(produto);
    }
});

// POST /produtos - Adicionar um produto
app.post('/produtos', (req, res) => {
    const {nome, preco, descricao} = req.body;
    const produto = {id: ++id, nome, preco, descricao};
    produtos.push(produto);
    res.json(produto);
});

// DELETE /produtos/:id - Apagar um produto pelo ID
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((prod) => prod.id === id);
    if(!index) {
        res.status(404).json({message: 'produto não encontrado.'});
    } else {
        produtos.splice(index, 1);
        res.json({message: "produto deletado com sucesso."})
    }
});

// PUT /produtos/:id - Atualizar um produto pelo ID
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((prod) => prod.id === id);
    if (!produto) {
        res.status(404).json({message: "produto não encontrado."});
    } else {
        const {nome, preco, descricao} = req.body;
        produto.nome = nome || produto.nome;
        produto.preco = preco || produto.preco;
        produto.descricao = descricao || produto.descricao;

        res.json(produto);
    }
});

// rota raiz
app.get('/', (req, res) => {
    res.send('<h1>Testando a API de Produtos</h1>'); 
});

// servidor
app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});