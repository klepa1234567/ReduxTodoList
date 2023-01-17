import {TaskCompletionAction, AllTasksCompletedAction, DeletingCompletedTasksAction, DeleteAllTasksCompleted} from '../todoList/action'
import {TaskArray} from "../../variable";

export type Complleted = {completedTodo: TaskArray};

const initialState: Complleted = {
    completedTodo:[],
}

type Action =
    TaskCompletionAction |
    AllTasksCompletedAction |
    DeletingCompletedTasksAction |
    DeleteAllTasksCompleted;

export default function reducer(state = initialState, action: Action): Complleted{
    switch (action.type) {
        case 'ALL_TASKS_COMPLETED': {
            const newCompletedTodo = [...state.completedTodo]
            action.payload.todoList.forEach((value)=>{
                newCompletedTodo.push(value)
            })
            return {...state, completedTodo: newCompletedTodo}
        }
         case 'TASK_COMPLETION_BUTTON': {
            const newState = [...state.completedTodo];
             newState.push(action.payload.task);
             return {...state, completedTodo: newState};
        }
        case 'DELETING_COMPLETED_TASKS': {
            const deleting = [...state.completedTodo]
            const completedTasks = deleting.filter((state)=>{
                if(state.id === action.payload.id){
                    return false;
                }
                return true;
            })
            
            return  {...state, completedTodo: completedTasks}
        }
        case 'DELETE_ALL_TASKS_COMPLETED':{
            return {...state, completedTodo:[]}
        }
        default:
            return state
    }
}