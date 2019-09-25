import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <ul  className="List-group my-5">
                 <h4 className="text-capitalize text-center">Piste ici, il y à ta liste</h4>
                 {
                     items.map(item => {
                         return(
                             <TodoItems 
                             key={item.id} 
                             title={item.title}
                             handleDelete={() => handleDelete(item.id)}
                             handleEdit={() => handleEdit(item.id)}
                             />
                         )
                     })
                 }
                 <button 
                    type="submit" 
                    className=" btn btn-link btn-lock text-capitalize mt-5"
                    onClick={clearList}>Vider la liste !</button>
            </ul>
        );
    }
}

export default TodoList;