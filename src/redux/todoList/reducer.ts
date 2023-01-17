import {TaskArray} from "../../variable";
import {AddATask , DeleteTaskAction , DeleteAllTasks , TaskCompletionAction ,
        AllTasksCompletedAction , CancelTasks , SearchAction , TaskLikeChangeAction, TaskDescriptionAction,TasksLocalStorageAction} from './action'

export type TodoState = {
    data: TaskArray;
};

const initialState: TodoState = {
    data:[],
};

type Action = AddATask |
    DeleteTaskAction |
    DeleteAllTasks |
    TaskCompletionAction |
    AllTasksCompletedAction |
    CancelTasks |
    SearchAction |
    TaskLikeChangeAction|
    TaskDescriptionAction|
    TasksLocalStorageAction
    ;

export default function reducer(state = initialState, action: Action): TodoState{
    switch (action.type) {
        case'ADD_A_TASK': {
            const t = [...state.data];
            t.push(action.payload.task);
            return {...state,data:t};
        }
        case'DELETE_TASK':{
            const y = state.data.filter((value)=>{
                if(value.id !== action.payload.id){
                    return true;
                }
            });

            return {...state,data:y};
        }
        case 'DELETE_ALL_TASKS':{
            return {...state, data:[]};
        }
        case 'TASK_COMPLETION_BUTTON':{
            const taskMap = state.data.filter((value)=>{
                if(value.id === action.payload.task.id){
                    return false;
                }
                return true;
            })

            return {...state, data:taskMap};
        }
        case 'ALL_TASKS_COMPLETED':{
            return {...state, data:[]};
        }
        case 'CANCEL_TASKS':{
            const cancel = state.data.map((value)=>{
                const val = {...value, checked:false}
                return val;
            })
            return {...state, data: cancel};
        }
        case "SEARCH": {
            const search = state.data.map((value)=>{
                if(
                    value.name.includes(action.payload.value) &&
                    action.payload.value !== ''
                ){
                   return {...value, search:true};
                } else {
                    return {...value,search: false};
                }
            })
            return {...state, data: search};
        }
        case 'TASK_LIKE_CHANGE':{
            const liked = state.data.map((value)=>{
               if(value.id === action.payload.id) {
                   return {...value, like: !value.like};
               }

               return value;
            });

            return {...state, data: liked};
        }
        case 'TASK_DESCRIPTION':{
            const tasksWithDescription = state.data.map((value)=>{
                 if(value.id === action.payload.id){
                     return {...value, description: action.payload.description};
                 }
                 return value;
             });
             return {...state, data: tasksWithDescription};
        }
        case 'TASKS_LOCAL_STORAGE':{
            console.log('action.payload.tasks',action.payload.tasks)
            if(state.data.length === 0){
                return {...state, data:action.payload.tasks};
            }
            return state;
        }

        default:
            return state;
    }
}