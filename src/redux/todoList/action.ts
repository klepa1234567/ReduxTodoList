import {Task, TaskArray} from '../../variable'

export type AddATask = {
    type: 'ADD_A_TASK';
    payload:{
        task: Task;
    }
};
export function addATask(task: Task): AddATask {
    return{
        type:'ADD_A_TASK',
        payload:{
            task
        }
    }
}

export type DeleteTaskAction = {
    type: 'DELETE_TASK';
    payload:{
        id: Task['id'];
    }
};

export function deleteTask(id: Task['id']): DeleteTaskAction{
    return{
        type:'DELETE_TASK',
        payload:{
            id
        }
    }
}

export type DeleteAllTasks = {
    type: 'DELETE_ALL_TASKS';
}

export function deleteAllTasks(): DeleteAllTasks{
    return{
        type:'DELETE_ALL_TASKS'
    }
}


export type TaskCompletionAction ={
    type: 'TASK_COMPLETION_BUTTON';
    payload:{
        task: Task;
    }
};

export function taskCompletion(task: Task): TaskCompletionAction {
    return{
        type: 'TASK_COMPLETION_BUTTON',
        payload:{
            task,
        }
    }
}


export type AllTasksCompletedAction = {
    type: 'ALL_TASKS_COMPLETED';
    payload: {
        todoList: TaskArray;
    }
}

export function allTasksCompleted(todoList: TaskArray): AllTasksCompletedAction {
    return{
        type:'ALL_TASKS_COMPLETED',
        payload: {
            todoList,
        }
    }
}

export type CancelTasks = {
    type: 'CANCEL_TASKS';
}

export function cancelTasks(): CancelTasks {
    return{
        type:'CANCEL_TASKS'
    }
}


export type SearchAction = {
    type: 'SEARCH';
    payload:{
        value: string;
    }
};

export function search(value: string): SearchAction{
    return{
        type: 'SEARCH',
        payload:{
            value,
        }
    }
}

export type DeletingCompletedTasksAction = {
    type: 'DELETING_COMPLETED_TASKS';
    payload: {
        id: Task['id'];
    }
};

export function deletingCompletedTasks(id: Task['id']): DeletingCompletedTasksAction {
    return{
        type:'DELETING_COMPLETED_TASKS',
        payload: {
            id,
        }
    }
}

export type DeleteAllTasksCompleted = {
    type: 'DELETE_ALL_TASKS_COMPLETED';
};

export function deleteAllTasksCompleted(): DeleteAllTasksCompleted {
    return{
        type:'DELETE_ALL_TASKS_COMPLETED',
    }
}

export type TaskLikeChangeAction = {
    type: 'TASK_LIKE_CHANGE';
    payload: {
        id: Task['id'];
    }
};

export function taskLikeChange(id: Task['id']): TaskLikeChangeAction {
    return{
        type: "TASK_LIKE_CHANGE",
        payload: {
            id,
        }
    }
}
export type TaskDescriptionAction = {
    type: 'TASK_DESCRIPTION',
    payload: {
        description: NonNullable<Task["description"]>;
        id: Task['id'];
    }
}
export function taskDescription(description: NonNullable<Task["description"]>,id: Task['id']) : TaskDescriptionAction{
    return{
        type: 'TASK_DESCRIPTION',
        payload: {
            description,
            id,
        }
    }
}

export type TasksLocalStorageAction = {
    type:'TASKS_LOCAL_STORAGE',
    payload:{
        tasks: TaskArray;
    }
}

export function tasksLocalStorage(tasks: TaskArray) : TasksLocalStorageAction {
    return{
        type:'TASKS_LOCAL_STORAGE',
        payload:{
            tasks,
        }
    }
}
