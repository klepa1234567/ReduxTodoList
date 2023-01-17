import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {cancelTasks} from '../../redux/todoList/action'
import './cancelTasks.scss';
import {ReduxState} from "../../redux/state"

function CancelTasks() {
    const dispatch = useDispatch()
    const data = useSelector((state:ReduxState)=>{
        return state.todo.data
    })
    
    const hasCheckedItems = data.some((value)=>{
        if (value.checked === true){
            return true
        }
    })
    function onClick() {
        dispatch(cancelTasks())
    }
    if (hasCheckedItems === true){
        return (<button className='cancelTasks' onClick={onClick}>Отменить задачи</button>)
    }
    return null
}

export default CancelTasks;
