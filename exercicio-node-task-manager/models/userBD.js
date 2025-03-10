require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(name, email, password) {
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
        include: { tasks: true },
    });
    return user;
};

async function getUsers() {
    const users = await prisma.user.findMany({
        include: { tasks: true },
    });
    return users;
}

async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: { tasks: true },
    });
    return user;
};

async function updateUser(id, data) {
    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data,
        include: { tasks: true },
    });
    return user;
};

async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: { id: parseInt(id) },
        include: { tasks: true },
    });
    return user;
};

// Funções para tarefas
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

async function updateTask(id, data) {
    const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data,
        include: { user: true },
    });
    return task;
};

async function deleteTask(id) {
    const task = await prisma.task.delete({
        where: { id: parseInt(id) },
        include: { user: true },
    });
    return task;
};

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

async function getTasksByUserId(userId) {
    const tasks = await prisma.task.findMany({
        where: { userId: parseInt(userId) },
        include: { user: true },
    });
    return tasks;
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    createTask,
    updateTask,
    deleteTask,
    getUserByEmailAndPassword,
    getTasksByUserId,
};