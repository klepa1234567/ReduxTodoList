import {TaskArray} from "../../variable";
import {LikeTasksAction, LikeDeleteAction} from './action';


export type LikeTasks = {
    likeTasks: TaskArray;
};

const initialState: LikeTasks = {
    likeTasks : [],
};

type Action = LikeTasksAction | LikeDeleteAction;

export default function reducer(state = initialState, action: Action): LikeTasks{
    switch (action.type) {
        case 'LIKE_TASKS': {
            const likes = [...state.likeTasks];
               likes.push(action.payload.task);
            return { ...state, likeTasks: likes };
        }
        case 'LIKE_DELETE':{
            const likes = [...state.likeTasks]
            const likesFilter = likes.filter((value)=>{
                return value.id !== action.payload.id;
            });
            return {...state, likeTasks: likesFilter}

        }
        default:
            return state
    }
}
