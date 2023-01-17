import {Complleted} from "./completed/reducer";
import {DeleteTasks} from './deleted/reducer';
import {LikeTasks} from './like/reducer';
import {TodoState} from "./todoList/reducer";
import {Edit} from "./edit/reducer"




export type ReduxState = {
    completed: Complleted;
    deleted: DeleteTasks;
    likeTasks: LikeTasks;
    todo: TodoState;
    edit :Edit;
};
