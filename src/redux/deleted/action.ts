import {Task} from "../../variable";


export type DeleteTasksAction = {
    type: 'DELETED_TASKS';
    payload: {
        id: Task['id'];
        name: Task['name'];
    };
};

export function deleteTasks(id: Task['id'], name: Task['name']): DeleteTasksAction {
    return{
        type:'DELETED_TASKS',
        payload: {
            id,
            name,
        },
    }
}
type DeleteTasks = {id: Task['id'], name: Task['name']}[];
export type DeleteAllAction = {
    type: 'DELETE_ALL';
    payload: {
        tasks: DeleteTasks;
    };
};

export function deleteAll(tasks: DeleteTasks): DeleteAllAction {
    return {
        type: 'DELETE_ALL',
        payload: {
            tasks,
        },
    }
}
type DeleteAllCompletion = {id: Task['id'], name: Task['name']}[];
 export type DeleteAllCompletionAction = {
    type: 'DELETE_ALL_COMPLETION';
    payload: {
        tasks: DeleteAllCompletion;
    };
};

export function deleteAllCompletion(tasks: DeleteAllCompletion): DeleteAllCompletionAction {
    return{
        type: 'DELETE_ALL_COMPLETION',
        payload: {
            tasks,
        },
    }
}