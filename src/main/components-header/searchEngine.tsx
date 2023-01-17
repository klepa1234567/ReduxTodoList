import React, {FC, Dispatch, SetStateAction } from "react";
import {useSelector,useDispatch} from "react-redux";
import {search} from "../../redux/todoList/action"
import "./searchEngine.scss";
import {ReduxState} from "../../redux/state"

type SetValue = Dispatch<SetStateAction<string>>;

type SearchEngineProps = {
    state: string;
    setValue: SetValue;
}

const SearchEngine: FC <SearchEngineProps> = (props) => {
    const data = useSelector((state:ReduxState)=>{
        return state.todo.data
    });

    const dispatch = useDispatch();
    const isEmpty = (data.length === 0)

    function onChange(event) {
        dispatch(search(event.target.value))
        props.setValue(event.target.value)
    }
    
 return(
     <>
         {isEmpty ? null : <input
             placeholder="🔎Поиск..."
             className='input'
             value={props.state}
             onChange={onChange}
         />}
     </>
 )
}

export default SearchEngine;