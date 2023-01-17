import React from "react";
import {deleteAllTasks} from "../../redux/todoList/action";
import {useDispatch, useSelector} from "react-redux";
import {deleteAll} from "../../redux/deleted/action";
import './deleteAllTask.scss';
import {ReduxState} from "../../redux/state"

function DeleteAllTask() {

    const data = useSelector((state:ReduxState)=>{
        return state.todo.data
    })

    const dispatch = useDispatch();
    const removalTasks = data.map((value)=>{
        return {id: value.id, name: value.name}
    })

    function onClick() {
        dispatch(deleteAll(removalTasks))
        dispatch(deleteAllTasks())
    }
    const isEmpty = (data.length === 0)
    return (
        <>
            {isEmpty ? null : <button className='deleteAllTask' onClick={onClick}>Удалить все задачи</button>}
        </>
    );
}

export default DeleteAllTask;