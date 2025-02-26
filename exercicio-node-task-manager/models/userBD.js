require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(name, email) {
    const user = await prisma.user.create({
        data: {
            name,
            email,
        }
    });
    return user;
};

async function getUsers() {
    const users = await prisma.user.findMany();
    return users;
}

async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)},
        include: { tasks: true },
    });
    return user;
};

async function updateUser(id, data) {
    const user = await prisma.user.update({
        where: {id: parseInt(id) },
        data,
    });
    return  user;
};

async function deleteUser(id) {
    const user = await prisma.user.delete({
        where: {id: parseInt(id) },
    });
    return user;
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};