require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTask(title, description, status) {
    const task = await prisma.task.create({
        data: {
            title,
            description,
            status
        }
    });
    return task;
}

async function getTasks() {
    const tasks = await prisma.task.findMany();
    return tasks;
}

async function getTaskById(id) {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });
    return task;
}

async function updateTask(id, data) {
  const task = await prisma.task.update({
    where: { id: parseInt(id) },
    data,
  });
  return task;
}

async function deleteTask(id) {
  const task = await prisma.task.delete({
    where: { id: parseInt(id) },
  });
  return task;
}

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};