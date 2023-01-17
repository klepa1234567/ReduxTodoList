import React, {useState} from "react";
import InputBlock from "./main/components-header/inputBlock";
import Tasks from './main/components-todo-item/tasks'
import DeleteAllTask from "./main/components-header/deleteAllTask";
import ButtonAllTasksCompleted from "./main/components-header/buttonAllTasksCompleted";
import CancelTasks from "./main/components-header/cancelTasks";
import SearchEngine from "./main/components-header/searchEngine";


function TodoList() {
    const [searchState, setSearchState] = useState('');
    return(
        <>
            <InputBlock searchState={searchState}/>
            <SearchEngine state={searchState} setValue={setSearchState}/>
            <DeleteAllTask/>
            <ButtonAllTasksCompleted />
            <CancelTasks/>
            <Tasks/>
        </>
    )
}

export default TodoList;