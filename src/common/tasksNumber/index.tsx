import React, { FC } from "react";
import classnames from "classnames";
import "./tasksNumber.css"

type TasksNumberProps = {
    value: number;
};

const TasksNumber: FC<TasksNumberProps> = (props) => {
    return (
        <span className={classnames('oddNumbers', {'evenNumbers': props.value % 2 })} >
            {props.value}
        </span>
    );
};

export default TasksNumber;