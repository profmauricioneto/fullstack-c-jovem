let tasks = [];
let id = 1;

const getTasks = () => {
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



