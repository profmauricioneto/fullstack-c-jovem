require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Adiciona uma nova task ao banco
async function createTask(title, description, status) {
    const task = await prisma.tasks.create({
        data: {
            title,
            description,
            status
        }
    });
    return task;
};

// lê todas as tasks do banco
async function getAllTask() {
    const tasks = await prisma.tasks.findMany();
    return tasks;
};

// lê uma task especificada pelo ID
async function getTaskById(id) {
    const task = await prisma.tasks.findUnique({
        where: {id: parseInt(id)},
    });
    return task;
};

// Atualizada a task com base no ID
async function updateTask(id, data) {
    const task = await prisma.tasks.update({
        where: {id: parseInt(id)},
        data,
    });
    return task;
};

// Apaga uma task com base no ID
async function deleteTask(id) {
    const task = await prisma.tasks.delete({
        where: {id: parseInt(id)},
    });
    return task;
};

module.exports = {
    createTask,
    getAllTask,
    getTaskById,
    updateTask,
    deleteTask
};