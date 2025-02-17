let tasks = [
    {id: 1, title: 'estudar node', description: 'estudar o ambiente node', status:'pendente'},
    {id: 2, title: 'estudar router', description: 'estudar o router node', status:'pendente'},
    {id: 3, title: 'estudar prisma', description: 'estudar o prisma orm', status:'pendente'}
];
let id = 4;

const createTask = (title, description, status='pendente') => {
    tasks.push({id, title, description, status});
    id++;
};

const getAllTasks = () => {
    return tasks;
};

const getTaskById = (id) => {
    const task = tasks.find((task) => task.id === id);
    return task;
};

const updateTask = (id, title, description, status) => {
    const task = getTaskById(id);
    if (task) {
        task.title = title || task.title
        task.description = description || task.description
        task.status = status || task.status
    }
};

const deleteTask = (id) => {
    const indexById = tasks.findIndex(task => task.id === id);
    tasks.splice(indexById, 1);
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};