import React, { Component } from 'react';


class TodoItems extends Component {
    render() {
        const { title, handleDelete, handleEdit} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <button 
                    className="btn btn-warning mx-2"
                    onClick={handleEdit}>
                    Edité
                    </button>
                    <button 
                    className="btn btn-danger mx-2"
                    onClick={handleDelete}
                    >
                    X
                    </button>
                </div>                
            </li>
        );
    }
}

export default TodoItems;