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
    const renderToDoList = () => {
        const { tasks } = props;
        // console.log(tasks);
        return STATUSES.map((status, id) => {
            // console.log(status, tasks.status);

            const taskStatus = tasks.filter(x => x.status === status  );
            console.log(taskStatus); //this is returning an Empty array!
        return (
            <div key={id}>
                <ToDoList key={status} status={status} tasks={taskStatus}></ToDoList>
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
            {ToDo.showInput && <form action="">
                <div className="form-group">
                    <input onChange={TaskName} type="text" className="form-control" id="TaskName" placeholder="Task Title" required />
                </div>
                <div className="form-group">
                    <textarea required onChange={TaskDescription} className="form-control" id="TaskDescription" rows="3"
                        placeholder="Write a short description about your task..." />
                </div>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>}
            <div>
                {
                    renderToDoList()
                }
            </div>
        </div>
    </>
);
};


export default Home;