import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../redux/state";
import {taskDescription} from "../redux/todoList/action";
import {taskIdToEditDelete} from "../redux/edit/action"

const TaskDescriptionSetting = ()=> {
    const data = useSelector((state: ReduxState) =>{
        return state.todo.data
    });
    const desiredId = useSelector((state:ReduxState )=>{
        return state.edit
    })
     const dispatch = useDispatch()
    const [taskId, setTaskId] = useState<number | null>(null);
    const [textAreaValue, setTextAreaValue] = useState('')

    useEffect(() => {
         setTaskId(desiredId.id);
        return ()=>{
            dispatch(taskIdToEditDelete());
        }
    }, [desiredId.id]);

    const onChangeSelect = (e) => {
        const value: string = e.target.value;
        const valueNumber = Number(value);
        setTaskId(valueNumber);
    };

    const teaxtArea = (e) =>{
        setTextAreaValue(e.target.value);
    }

    const onClick = () =>{
         dispatch(taskDescription(textAreaValue, taskId));
         setTextAreaValue('')
    }


    return (
        <div>
            <select defaultValue={desiredId.id} onChange={onChangeSelect}>
                {desiredId.id === null && <option disabled selected hidden>Выбрать задачу</option>}
                {data.map((value)=> {
                    return <option key={value.id} value={value.id}>{value.name}</option>
                })}
            </select>
            {taskId !== null  && <textarea  value={textAreaValue} onChange={teaxtArea}></textarea>}
            {taskId !== null && <button  onClick={onClick} >+</button>}
        </div>
    )

}

export default TaskDescriptionSetting;