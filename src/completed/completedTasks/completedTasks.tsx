import React from "react";
import {useDispatch, useSelector} from "react-redux";
import  "./completedTask.scss";
import {deletingCompletedTasks} from "../../redux/todoList/action";
import {deleteTasks} from "../../redux/deleted/action"
import {deleteAllTasksCompleted} from '../../redux/todoList/action'
import {deleteAllCompletion} from "../../redux/deleted/action";
import {ReduxState} from '../../redux/state'
import {Task} from '../../variable'

function CompletedTask() {
    const data = useSelector((state : ReduxState)=>{
        return state.completed.completedTodo
    });
    const dispatch = useDispatch();


    function onclick(value: Task) {
        return ()=>{
            dispatch(deletingCompletedTasks(value.id));
            dispatch(deleteTasks(value.id, value.name))
         }
    }
    const tasksToDelete = data.map((value)=>{
        return {id: value.id, name: value.name}
    });

    function onClickDeleteAll(){
      dispatch(deleteAllTasksCompleted( ));
      dispatch(deleteAllCompletion(tasksToDelete))
    }

    return (
      <>
       {data.length === 0 ? "Задач нет":  <button className='button' onClick={onClickDeleteAll}>Удалить все</button>}
       {data.map((value)=>{
           return(
             <div key={value.id} className='completed'>
               <div>{value.name}</div>
                <button className='button' onClick={onclick(value)}>х</button>
            </div>
           );
        })}
      </>
    );
}

export default CompletedTask;