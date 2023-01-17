import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TodoList from "./todoList";
import CompletedTask from "./completed/completedTasks/completedTasks"
import TasksNumber from "./common/tasksNumber/index"
import {useSelector} from "react-redux";
import DeletedTask from "./deleted/deletedTask";
import LikeTasks from './likeTasks/likeTasks';
import './App.scss';
import {ReduxState} from "./redux/state";
import TaskDescriptionSetting from "./taskDescription/taskDescriptionSettings";
import ServerRequest from './serverRequest';

const ROUTES = {
    main: '/',
    completed: '/completedTasks',
};

function App() {
    const data = useSelector((state:ReduxState)=>{
        return state.todo.data
    });
    const  completedTodo = useSelector((state:ReduxState)=>{
        return state.completed.completedTodo
    });
    const deletedTask = useSelector((state:ReduxState) =>{
        return state.deleted.deleteTasks
    })
    const likeTasks = useSelector((state:ReduxState)=>{
        return state.likeTasks.likeTasks
    })
    return(
        <>
            <h2>Todo List</h2>
            <div>
                <Link className='link' to={ROUTES.main}>
                    Главная <TasksNumber value={data.length} />
                </Link>
                <Link
                    className='link'
                    to={ROUTES.completed}>
                        Выполненные задачи
                        <TasksNumber value={completedTodo.length} />
                </Link>
                <Link
                    className='link'
                    to="/deletedTasks">
                        Удаленные задачи
                        <TasksNumber value={deletedTask.length} />
                </Link>
                <Link
                    className='link'
                    to='/likeTasks'>
                        Избранные задачи
                        <TasksNumber value={likeTasks.length} />
                </Link>
                <Link to='/taskDescription' >
                    Описание задачи
                </Link>
                <ServerRequest/>
            </div>
            <Routes>
                <Route
                    path='/'
                    element={<TodoList/>}
                />
                <Route
                    path='/completedTasks'
                    element={<CompletedTask/>}
                />
                <Route
                    path='/deletedTasks'
                    element={<DeletedTask/>}
                />
                <Route
                    path='/likeTasks'
                    element={<LikeTasks/>}
                />
                <Route
                    path='/taskDescription'
                    element={<TaskDescriptionSetting/>}
                />

            </Routes>
        </>
    )
}

export default App