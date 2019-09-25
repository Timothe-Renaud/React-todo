import React, { Component } from 'react';


class Todo extends Component {
    render() {
        const {item,handleChange, handleSubmit, editItem} = this.props
        return (                          
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Azy je sais que tu as du taff pour moi le S !!"
                            value={item}
                            onChange={handleChange}
                            ></input>
                    </div>
                    <button type="submit" 
                    className={
                        editItem ? "btn btn-block btn-success mt-2":"btn btn-block btn-primary mt-2"
                    }>
                    {editItem ? "terminer le modif" : "Ajouter"}</button>
                </form>   
            </div>
        );
    }
}

export default Todo;