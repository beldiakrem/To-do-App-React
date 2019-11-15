import React, { Component } from 'react';
import "./App.css"
import Add from './component/Add';
import List from './component/List';

export default class App extends Component {

constructor(){
  super();
  this.state = {
    tasks:[]
  };
}

addtask = newTask => {
  this.setState(
    {
      tasks: this.state.tasks.concat(newTask) 
     },
  )
  }

  deleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter(e => 
        e.id !== id
        )
    });
  };

  completeTask = id => {
    this.setState({
      tasks: this.state.tasks.map(e =>
        e.id === id ? { ...e, isCompleted: !e.isCompleted } : e
      )
    });
  };

  render() {
    return (
      <div>
        <Add newTask={this.addtask} />
        <List tasks={this.state.tasks}
              delete={this.deleteTask}
              complete={this.completeTask}
              />
      </div>
    )
  }
}

