import React, {useState, FC} from 'react';
import {addATask} from "../../redux/todoList/action";
import {useDispatch} from "react-redux";
import './inputBlock.scss'

type InputBlockProps = {
    searchState: string;
}

const InputBlock: FC<InputBlockProps> = (props) => {
    const [taskValue, setTaskValue] = useState('');
    const dispatch = useDispatch();




    function textEnteredInInput(event) {
        setTaskValue(event.target.value);
    }
    function onClick() {
        const searhed = taskValue.includes(props.searchState);
        if (taskValue !== ''){

            const data = {id: Math.random(), name: taskValue,checked: false, search: searhed, like: false};
            dispatch(addATask(data));
            setTaskValue('');

            const tasksFromLocalStorage = JSON.parse(localStorage.getItem('task'));
            if(tasksFromLocalStorage ===  null){
                localStorage.setItem('task', JSON.stringify([data]))
            }else {
                const result = tasksFromLocalStorage.concat(data)
                localStorage.setItem('task', JSON.stringify(result))
            }
        }
    }

    return(
       <>
            <input
                placeholder="Новая задача..."
                value={taskValue}
                className='input'
                onChange={textEnteredInInput}
            />
            <button
                className='buttonInputBlock'
                onClick={onClick}
            >
                Добавить
            </button>
       </>
    )
}
export default InputBlock;
