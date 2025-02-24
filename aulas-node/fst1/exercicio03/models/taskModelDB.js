require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// create
async function createTask(title, description, status) {
    const task = await prisma.task.create({
        data: {
            title,
            description,
            status
        }
    });
    return task;
};

// getAllTasks
async function getAllTasks() {
    const tasks = await prisma.task.findMany();
    return tasks;
};

// getTask
async function getTaskById(id) {
    const task = await prisma.task.findUnique({
        where: {id: parseInt(id)},
    });
    return task;
};

// updateTask
async function updateTask(id, title, description, status) {
    const task = await prisma.task.update({
        where: {id: parseInt(id)},
        data: {
            title: title,
            description: description,
            status: status,
        },
    });
    return task;
};

// deleteTask
async function deleteTask(id) {
    const task = await prisma.task.delete({
        where: {id: parseInt(id)},
    });
    return task;
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}