import React ,{FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from '../../redux/todoList/action';
import {deleteTasks} from '../../redux/deleted/action';
import "./deleteTaskButton.scss";
import {Task} from "../../variable";
import {ReduxState} from "../../redux/state";

type DeleteTaskButtonProps = {
    name: Task["name"];
    id: Task["id"];
}

const DeleteTaskButton: FC<DeleteTaskButtonProps> = (props) => {
    const dispatch = useDispatch();

    const id = props.id;
    const name = props.name;
    function buttonDelete() {
        dispatch(deleteTasks(id, name))
        dispatch(deleteTask(id));
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('task'))

       const filteredTasks = tasksFromLocalStorage.filter((value)=>{
            if(id === value.id){
                return false
            }else {
                return true
            }
        })
        localStorage.setItem('task', JSON.stringify(filteredTasks))
    }
    return (
        <>
            <button className="button" onClick={buttonDelete}>X</button>
         </>

    );
}

export default DeleteTaskButton;