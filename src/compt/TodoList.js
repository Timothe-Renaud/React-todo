import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <ul  className="List-group">
                 <h4 className="text-center">Voici la liste des taches à rendre pour hier:</h4>
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
                    className=" btn btn-link btn-lock text-center mt-5"
                    onClick={clearList}>Vider la liste !</button>
            </ul>
        );
    }
}

export default TodoList;