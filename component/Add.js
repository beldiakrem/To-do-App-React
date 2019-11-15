import React, { Component } from 'react'

export default class Add extends Component {

    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    handleAdd = e => {
        e.preventDefault();
        this.props.newTask({
            id: Date.now(),
            title: this.state.task,
            isCompleted: false,
        });
        this.setState({
            task: ""
        });
    };

    render() {
        return (
            <div className="add">
                <div className="title">
                    <h1> To-Do App!</h1>
                    <p> Add New To-Do  </p>
                </div>
                <form>
                    <div>
                        <div className="input">
                            <input type="text"
                            
                                placeholder="Enter new Task"
                                value={this.state.task}
                                onChange={event => {
                                    this.setState({
                                        task: event.target.value
                                    })
                                }} />
                        </div>
                        <div className="button">
                            <button onClick={e => this.handleAdd(e)}>Add</button>
                        </div>
                    </div>


                </form>
            </div>
        )
    }
}
