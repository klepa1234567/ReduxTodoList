import {Task} from "../../variable";

export type TaskIdToEditAction = {
    type: 'TASK_ID_TO_EDIT',
    payload: {
        id: Task['id']
    }
}
export function taskIdToEdit(id: Task['id']): TaskIdToEditAction {
    return{
        type: 'TASK_ID_TO_EDIT',
        payload:{
            id
        }
    }
}

export type TaskIdToEditDeleteAction = {
    type:'TASK_ID_TO_EDIT_DELETE',
}

export function taskIdToEditDelete():TaskIdToEditDeleteAction {
    return{
        type: 'TASK_ID_TO_EDIT_DELETE',
    }
}