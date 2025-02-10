let tasks = [];
let id = 1;

const create = (title, description, status = 'pendente') => {
    tasks.push({ id, title, description, status });
    id++;
}

const getAll = () => {
    return tasks;
}

const getTaskById = (taskId) => {
    return tasks.find(task => task.id === taskId);
}

const updateTask = (taskId, title, description, status) => {
    const task = getTaskById(taskId);
    if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
    }
}

const deleteTask = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId);
}

module.exports = {
    create,
    getAll,
    getTaskById,
    updateTask,
    deleteTask
}
