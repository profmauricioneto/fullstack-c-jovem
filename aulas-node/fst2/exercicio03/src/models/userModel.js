require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// função para criar um usuário
async function createUser(name, email, password) {
    const user = await prisma.user.create( {
        data: {
            name,
            email,
            password,
        },
        include: { tasks: true },
    });
    return user;
};

// função para recuperar todos os dados de todos os usuários
async function getAllUsers() {
    const users = await prisma.user.findMany({
        include: { tasks: true },
    });
    return users;
};

// função para recuperar um usuário pelo seu ID
async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: { tasks: true },
    });
    return user;
};

// função para atualizar um usuário pelo ID
async function updateUser(id, data) {
    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data,
        include: { tasks: true },
    });
    return user;
};

// função para deletar um usuário pelo ID
async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: {id: parseInt(id) },
        include: { tasks: true },
    });
    return user;
};

// async function verifyLogin(email, password) {
//     const user = await prisma.user.findUnique({
//         email: {email: email},
//         password: {password: password},
//         include: { tasks: true },
//     });
//     return 
// }

// FUNÇÕES PARA MANIPULAÇÃO DAS TASK

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}