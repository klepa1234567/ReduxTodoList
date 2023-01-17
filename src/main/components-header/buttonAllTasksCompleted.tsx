import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {allTasksCompleted} from '../../redux/todoList/action';
import './buttonAllTasksCompleted.scss';
import {ReduxState} from "../../redux/state"

function ButtonAllTasksCompleted() {
    const data = useSelector((state: ReduxState)=>{
        return state.todo.data
    })

    const dispatch = useDispatch()
    const hasUncheckedItems = data.find((value)=>{
        if(value.checked === false){
            return true;
        }
    })

    function onClick() {
        dispatch(allTasksCompleted(data))
    }
    if(hasUncheckedItems !== undefined ){
        return(
            <button className='buttonAllTasks' onClick={onClick}>Выполнить все задачи</button>
        )
    }
    return null;
}

export default ButtonAllTasksCompleted;