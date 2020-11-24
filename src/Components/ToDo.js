import React from 'react';

const STATUSES = ["Pending", "onGoing", "Done"];
const ToDo = (props) => {
    const onStatusChange = (e) => {
        props.onStatusChange(props.tasks.id, e.target.value)
    }
    function onRemoveTask() {
        props.onRemoveTask(props.tasks.id)
    }
    return (
        <>
            <form onChange={onStatusChange}>
                <select defaultValue={props.tasks.status}>
                    {
                        STATUSES.map(status => <option value={status} key={status}>{status}</option>)
                    }
                </select>
            </form>
            <h2 className="card-title mt-3 text-uppercase px-2 text-dark">{props.tasks.name}</h2>
            <p className="card-text mb-3 text-muted font-weight-bold px-2 ">{props.tasks.description}</p>
<button onClick={()=> onRemoveTask(props.tasks.id)}>delete</button>
        </>
    );
};

export default ToDo;