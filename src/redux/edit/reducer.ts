import {Task} from "../../variable";
import {TaskIdToEditAction,TaskIdToEditDeleteAction} from "./action";

export type Edit = {
    id: Task['id'] | null;
};

const initialState: Edit = {
    id: null
}

type Action = TaskIdToEditAction|TaskIdToEditDeleteAction;

export default function reducer (state = initialState, action: Action) {
    switch (action.type) {
        case "TASK_ID_TO_EDIT":{
            const initialStateNew = {...state, id: action.payload.id}
            return initialStateNew;
        }
        case "TASK_ID_TO_EDIT_DELETE":{
            const initialStateNewDelete = {...state, id: null}
            return initialStateNewDelete
        }
        default:
            return state
    }
}