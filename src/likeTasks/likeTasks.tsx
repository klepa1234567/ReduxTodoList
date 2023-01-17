import React from "react";
import {useSelector} from "react-redux";
import {ReduxState} from "../redux/state"

function LikeTasks() {
    const data = useSelector((state:ReduxState) => {
        return state.likeTasks.likeTasks
    });

    return(
        <>
            {data.length === 0  ? "Задач нет" : data.map((favoriteTask)=>{
              return <div key={favoriteTask.id} >{favoriteTask.name}</div>
            })}
        </>
    )
}

export default LikeTasks