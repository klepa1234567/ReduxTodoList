import {Task} from "../../variable";



export type LikeTasksAction = {
    type: 'LIKE_TASKS';
    payload: {
      task: Task;
    }
};
export function likeTasks(task: Task): LikeTasksAction{
    return{
        type:'LIKE_TASKS',
        payload:{
            task,
        }
    }
}

 export type LikeDeleteAction = {
    type: 'LIKE_DELETE';
    payload: {
        id: number;
    }
};
export function likeDelete(id: number): LikeDeleteAction{
        return{
            type:'LIKE_DELETE',
            payload:{
                id,
            }
        }
}
