import React, { useState } from 'react';
import ToDoList from './ToDoList';

const Home = (props) => {
    const STATUSES = ["Pending", "onGoing", "Done"]; 
    const [ToDo, setTask] = useState({
        showInput: false,
        taskName: "",
        taskDescription: ""
    })
    const addBtn = () => {
        const newTask = { ...ToDo }
        ToDo.showInput ? newTask.showInput = false : newTask.showInput = true
        setTask(newTask);
    }
    const TaskName = (e) => {
        const newTask = { ...ToDo }
        newTask.taskName = e.target.value;
        setTask(newTask);
    }
    const TaskDescription = (e) => {
        const newTask = { ...ToDo }
        newTask.taskDescription = e.target.value;
        setTask(newTask);
    }

    const onCreateTask = (e) => {
        e.preventDefault();
        const ToDoo = {...ToDo} 
        const name = ToDoo.taskName;
        const description = ToDoo.taskDescription;
        props.onCreateTask({ name, description });
        setTask({});
    }


    const renderToDoList = () => {
        const { tasks } = props;
        return STATUSES.map((status, id) => {
            const taskStatus = tasks.filter(x => x.status === status);
            return (
                <div className="col-md-3 card m-2" key={id}>
                    <ToDoList key={status} status={status} tasks={taskStatus} onRemoveTask={props.onRemoveTask} onStatusChange={props.onStatusChange}></ToDoList>
                </div>
            )
        })
    }
    return (
        <>
            <div className="container py-2">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-info" onClick={addBtn}>&#43; Add Task</button>
                    <h1>Task Manager</h1>
                </div>
                <br />
                {ToDo.showInput && ( <form onSubmit={onCreateTask}>
                    <div className="form-group">
                        <input onChange={TaskName} type="text" className="form-control" id="TaskName" placeholder="Task Title" required />
                    </div>
                    <div className="form-group">
                        <textarea required onChange={TaskDescription} className="form-control" id="TaskDescription" rows="3"
                            placeholder="Write a short description about your task..." />
                    </div>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>)}
                <div className="row d-flex justify-content-center position-relative">
                    {
                        renderToDoList()
                    }
                </div>

            </div>
        </>
    );
};


export default Home;