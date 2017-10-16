import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <h1>To-Do List </h1>
          </div>

          <div>
            <br/>
            <div> Add to your list </div>
            <List/>
          </div>
        </div>
      );
    }
}

class List extends Component {
    constructor(props){
      super(props);
        this.state = {
          items: [],
          newItem: "",
          counter: 0,
        };
    }
    
    takeInput = (evt) => {
      this.setState({
        newItem: evt.target.value
      });
    }

    addItem = () => {
      let x = {
        value: this.state.newItem,
        done: false,
        id: this.state.counter
       }
      let todos=[...this.state.items]
      todos.push(x)

      this.setState({
        items: todos,
        newItem: "",
        counter: this.state.counter+1,
      });
    }

    render(){
      let unfinishedItems = this.state.items.filter((i) => {
        return i.done===false;
      });

      let list = unfinishedItems.map((item, idx) => {
        const deleteItem = () => {
          let todos = _.cloneDeep(this.state.items)
          let findItem = _.find(todos,{id: item.id})
          findItem.done=true
          this.setState({
            items: todos,
          });
        }

        return <div key={idx}>
                {item.value}
                <button type="button" className="delete-button" onClick={deleteItem}>X</button>
              </div>;
         });


      return(
        <div className="todo-list">
            <Search takeItem={this.takeInput} submit={this.addItem} value={this.state.newItem} />
            <div> {list} </div>
        </div>
        
      )
    }
}

class Search extends Component {
    render(){

      return(
        <div className="search-area">
            <br/>
            <input placeholder="Add TODO" className="bar" value={this.props.value} onChange={this.props.takeItem}/>
            <button type="button" className="add-button" onClick={this.props.submit}>Add</button>
        </div>
      )
    }
}

export default App;