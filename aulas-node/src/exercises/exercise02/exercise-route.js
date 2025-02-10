const express = require('express');
const app = express();
const port = 3000;

let produtos = [
    { id: 1, nome: 'Produto 1', preco: 100, descricao: 'Descrição do produto 1' },
    { id: 2, nome: 'Produto 2', preco: 200, descricao: 'Descrição do produto 2' },
    { id: 3, nome: 'Produto 3', preco: 300, descricao: 'Descrição do produto 3' },
    { id: 4, nome: 'Produto 4', preco: 400, descricao: 'Descrição do produto 4' },
    { id: 5, nome: 'Produto 5', preco: 500, descricao: 'Descrição do produto 5' }
];
let idContador = 6;

// função que apresenta o log da requisição
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next(); 
};

//middleware
app.use(express.json());
app.use(logMiddleware);

// criar um produto
app.post('/produtos', (req, res) => {
    const { nome, preco, descricao } = req.body;
    const produto = {id: idContador++, nome, preco, descricao }
    produtos.push(produto);
    res.status(201).json(produto);
});

// listas todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// buscar produto por id
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const produto = produtos.find((prod) => prod.id === id);
    if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado' });
    res.json(produto);
});

// atualizar um produto pelo id
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const produto = produtos.find(p => p.id === id);
    if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado' });

    const { nome, preco, descricao } = req.body;
    produto.nome = nome || produto.nome;
    produto.preco = preco || produto.preco;
    produto.descricao = descricao || produto.descricao;
    
    res.json(produto);
});

// deletar um produto pelo id
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ mensagem: 'Produto não encontrado' });
    produtos.splice(index, 1);
    res.json({ mensagem: 'Produto removido com sucesso' });
});

// executando uma mensagem na raiz
app.get('/', (req, res) => {
    res.send('<h1>Executando a API</h1>');
});

// servidor
app.listen(port, () => {
    console.log(`Servidor executando em: http://localhost:${port}`);
})