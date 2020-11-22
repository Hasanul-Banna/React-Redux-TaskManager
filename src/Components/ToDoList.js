import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    return (
        <div>
            {
                props.tasks.map(x => <ToDo tasks={x}></ToDo>)
            }
        </div>
    );
};

export default ToDoList;