let tasks = [
    {id: 1, title: 'estudar node', description: 'estudar backend com node', status:'pendente'},
    {id: 2, title: 'estudar react', description: 'estudar frontend com react', status:'pendente'},
    {id: 3, title: 'estudar rest', description: 'estudar o uso do padrão rest', status:'pendente'},
];
let id = 4;

const getAllTasks = () => {
    return tasks;
};

const createTask = (title, description, status = 'pendente') => {
    tasks.push({id: id, title, description, status});
    id++;
};

const getTaskById = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
        console.log('task não encontrada.');
    }
    return task;
};

const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks.splice(taskIndex, 1);
    console.log('task deletada!');
};

const updateTask = (id, title, description, status) => {
    const task = tasks.find((task) => task.id === id);
    if(task) {
        task.title = title || task.title;
        task.description = description || task.descriptionl;
        task.status = status || task.status; 
    }
    console.log('task atualizada!');
    
};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    deleteTask,
    updateTask
}



