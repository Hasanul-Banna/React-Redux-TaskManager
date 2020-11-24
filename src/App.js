import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import './App.css';
import { connect } from 'react-redux';
import { createTask, editTask , removeTASK } from './actions/action';

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }))
  }
  const onCreateTask = ({name,description}) =>{
    props.dispatch(createTask({name,description}))

  }
  const onRemoveTask = (id) =>{
    props.dispatch(removeTASK(id))

  }
  return (
    <>
      <Home tasks={props.tasks} onStatusChange={onStatusChange} onCreateTask={onCreateTask} onRemoveTask={onRemoveTask}/>
    </>
  );
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
