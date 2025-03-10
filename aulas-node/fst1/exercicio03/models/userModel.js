require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//  criar um novo usuario
async function createUser(name, email, password) {
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        },
        include: { tasks: true }
    });
    return user;
};

// recupera informações de todos os usuários
async function getUsers() {
    const users = await prisma.user.findMany({
        include: { tasks: true }
    });
    return users;
};

// recupera a informação de um único usuário pelo ID
async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: { tasks: true },
    });
    return user;
};

// atualizar dados do usuário
async function updateUser(id, data) {
    const user = await prisma.user.update({
        where: { id: parseInt(id)},
        data,
        include: { tasks: true },
    });
    return user;
};

// deletar informação do usuário
async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: { id: parseInt(id)},
        include: { tasks: true },
    });
    return user;
};

// FUNÇÕES DE CRUD DA TAREFA
module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};