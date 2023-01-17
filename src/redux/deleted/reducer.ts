import {Task} from "../../variable";
import {DeleteTasksAction,DeleteAllAction,DeleteAllCompletionAction} from "./action"

export type DeleteTasks = {
    deleteTasks: {id : Task['id'], name: Task['name']}[];
};

const initialState: DeleteTasks = {
    deleteTasks: [],
}

type Action = DeleteTasksAction | DeleteAllAction | DeleteAllCompletionAction;

 export default function  reducer (state = initialState, action: Action) : DeleteTasks {
        switch (action.type) {
            case 'DELETED_TASKS': {
                const newState = [...state.deleteTasks]
                newState.push({id:action.payload.id, name: action.payload.name});
                return {...state, deleteTasks: newState}
            }
            case 'DELETE_ALL':{
                const newState = [...state.deleteTasks];
               action.payload.tasks.forEach((value)=>{
                   newState.push(value)
                })

                return {...state,deleteTasks: newState}
            }
            case 'DELETE_ALL_COMPLETION':{
                const newState = [...state.deleteTasks];
                action.payload.tasks.forEach((value)=>{
                     newState.push(value)
                 })
                return {...state,deleteTasks: newState}
            }

            default:
                return state
        }

 }

