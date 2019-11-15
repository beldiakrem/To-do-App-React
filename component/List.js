import React, { Component } from 'react'

export default class List extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="list">
                <h3> Let's get some work done! </h3>
                {this.props.tasks.map((el, i) => (
                    <div className="button-list">

                        <div>
                            <button onClick={() => this.props.complete(el.id)}>
                                {el.isCompleted ? "Undo" : "Complete"}
                            </button>
                            <button onClick={() => this.props.delete(el.id)}>Delete</button>
                        </div>

                        <div >
                            <h3 className={el.isCompleted ? "completed" : ""} >{el.title} </h3>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}
