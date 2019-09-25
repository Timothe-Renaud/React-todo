import React from 'react';
import { Component } from 'react'
import '../src/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from  "uuid";

import AppBar from '@material-ui/core/AppBar';
import TodoInput from './compt/Todoinput';
import TodoListe from './compt/TodoList';

class App extends Component {
  state = {
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  };

  /**
   * Methode de changemen d'etat
   * Modifie l'etat de "en ecriture" à " ajouter en task List"
   */
  handleChange=e=>{
    this.setState({
      item:e.target.value
    });
  };

  /**
   * Methode d'envoie de la saisie en task à faire
   */
  handleSubmit=(e)=>{
    e.preventDefault();

    const newItem ={
      id:this.state.id,
      title:this.state.item
    }

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items:updateItems,
      item:'',
      id:uuid(),
      editItem:false
    })

  };

  
  /**
   * Methode qui clear / netoye tout le liste de task deja ajouté
   */
  clearList = ()=>{
    this.setState({
      items:[],
    })
  }

  /**
   * methode qui suprime precisement l'element "Task" acomplie par l'utilisateur
   */
  handleDelete = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItems
    })
  }

  /**
   * Methode qui permet d'editer une task precedement saisi.
   */
  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItem =this.state.items.find(item => item.id === id)

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id:id
    })

  }

render() {
  return (    
  <div className="App">
    <AppBar color="primary" position="static">
          <h1>Ma ToDo List :D</h1>
        </AppBar>
      <div className="container">
        <div className="row">
          <div class="background-container">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
          </div>

          <div className="col mx-auto col-md-8 mt-4" aria-hidden="true">
          <h3 className="Text-white">Bienvenue :D</h3>
          <h4></h4>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />              
            <TodoListe 
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />    
          </div>
        </div>
      </div>  
    </div>
  );
}
}

export default App;
