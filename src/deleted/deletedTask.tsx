import React from "react";
import {useSelector} from "react-redux";
import {ReduxState} from "../redux/state"

function DeletedTask() {
    const data = useSelector((state: ReduxState) =>{
        return state.deleted.deleteTasks
    });

    return (
        <div>
             {data.map((value)=>{
                 return(
                     <div key={value.id}>{value.name}</div>
                 )
             })}
            {data.length === 0 ? "Задач нет": null}
        </div>
    )
}

export default DeletedTask;