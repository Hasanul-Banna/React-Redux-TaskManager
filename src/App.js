import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import './App.css';
import { connect } from 'react-redux';

function App({ tasks }) {
  return (
    <>
      <Home tasks={tasks} />
    </>
  );
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
