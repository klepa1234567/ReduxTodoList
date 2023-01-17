import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {taskCompletion} from '../../redux/todoList/action';
import "./taskCompleyxhdxx.css";
import classnames from "classnames";
import {Task} from "../../variable";
import {ReduxState} from "../../redux/state"

type TaskCompletionButtonProps = {
    checked: Task['checked'];
    id:Task['id'];
}

const TaskCompletionInput: FC<TaskCompletionButtonProps> = (props) => {
    const dispatch = useDispatch();

    const tasks = useSelector((state:ReduxState)=>{
        return state.todo.data
    })

    const taskById = tasks.find((task)=>{
        if(task.id === props.id){
            return true;
        }
    })

    function onClick() {
        dispatch(taskCompletion(taskById))
    }


    return (
       <div className={
            classnames('container', {
                'containerChecked': props.checked === true
            })
       }>
           <input
               checked={props.checked}
               onChange={onClick}
               type='checkbox'
           />

       </div>
    )
}

export default TaskCompletionInput;