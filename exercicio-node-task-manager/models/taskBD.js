require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTask(title, description, status, userId) {
    const task = await prisma.task.create({
        data: {
            title,
            description,
            status,
            userId,
        }
    });
    return task;
}

async function getTasks() {
    const tasks = await prisma.task.findMany(
      {include: {user: true}}
    );
    return tasks;
}

async function getTaskById(id) {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
      include: { user: true },
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
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
};