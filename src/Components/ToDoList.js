import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    return (
        <div>
            <div className="card-header text-info text-uppercase text-center font-weight-bold">
                {props.status}
            </div>
            {
                props.tasks.map(x => <ToDo tasks={x} onStatusChange={props.onStatusChange} onRemoveTask={props.onRemoveTask}></ToDo>)
            }
        </div>
    );
};

export default ToDoList;