import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import DeleteTaskButton from "./deleteTaskButton";
import TaskCompletionButton from "./taskCompletionButton";
import  "./tasks.scss";
import classnames from 'classnames';
import {taskLikeChange} from "../../redux/todoList/action";
import {likeTasks} from '../../redux/like/action';
import {likeDelete} from '../../redux/like/action';
import {ReduxState} from "../../redux/state";
import {Task} from "../../variable";
import {taskIdToEdit} from "../../redux/edit/action";
import { Link } from "react-router-dom";
import {tasksLocalStorage} from '../../redux/todoList/action';
import ServerRequest from '../../serverRequest'


import imgLaki from "./img/laki.png";
import imgNull from "./img/null.png";

function Tasks() {
    const data = useSelector((state:ReduxState)=>{
        return state.todo.data
    })

    const dispatch = useDispatch();

    useEffect(()=>{
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('task'))
         if(tasksFromLocalStorage !== null)
         {
             dispatch(tasksLocalStorage(tasksFromLocalStorage))
         }
        },[])

    function onclick(value: Task) {
        return () => {
            dispatch(taskLikeChange(value.id))
           if(value.like === false)
           {
               dispatch(likeTasks(value))
           }else {
               dispatch(likeDelete(value.id))
           }

        }
    }
    function buttonAddDescription(value: Task) {
        return () => {
            dispatch(taskIdToEdit(value.id));
        }
    }
    return (
        <>
            {data.map((value) => {
                const imgSrc = value.like === false ? imgNull : imgLaki;
                const imgAlt = value.like === false ? "No like" : "like"

                    return (
                        <div
                            key={value.id}
                            className={classnames('taskField', {
                                'taskFieldTrue': value.search === true,
                                'checkedTrue':value.checked === true
                            })}
                        >
                            {value.name}
                            <img
                                className='like'
                                onClick={onclick(value)}
                                src={imgSrc} alt={imgAlt}
                            />
                            <DeleteTaskButton
                                name={value.name}
                                id={value.id}
                            />
                            <TaskCompletionButton
                                checked={value.checked}
                                id={value.id}
                            />
                            <Link to='/taskDescription'>
                                <button
                                    onClick={buttonAddDescription(value)} >
                                     Добавить описание
                                </button>
                            </Link>
                            <p>{value.description}</p>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Tasks;

