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

// buscar pelo login do usuário
async function getUserByEmailAndPassword(email, password) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
            password: password,
        },
        include: { tasks: true },
    });
    return user;
};

// retornar todas as tasks do usuário
async function getTasksByUserId(userId) {
    const tasks = await prisma.task.findMany({
        where: { userId: parseInt(userId) },
        include: { user: true },
    });
    return tasks;
};

// cria uma task de um usuário específico
async function createTask(userId, title, description, status) {
    const task = await prisma.task.create({
        data: {
            title,
            description,
            status,
            userId: parseInt(userId),
        },
        include: { user: true },
    });
    return task;
};

// atualiza os dados de um task específica
async function updateTask(id, data) {
    const task = await prisma.task.update({
        where: {id: parseInt(id)},
        data,
        include: { user: true },
    });
    return task;
};

// deleta uma task específica
async function deleteTask(id) {
    const task = await prisma.task.delete({
        where: {id: parseInt(id)},
        include: { user: true },
    });
    return task;
};

// FUNÇÕES DE CRUD DA TAREFA
module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmailAndPassword,
    getTasksByUserId,
    createTask,
    updateTask,
    deleteTask,
};