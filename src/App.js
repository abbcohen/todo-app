import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';


class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <h1>TODO APP</h1>
          </div>
          <div>
            <br/>
            <Big/>
          </div>
        </div>
      );
    }
}


class Big extends Component {
 constructor(props){
  super(props),
  this.state={
    bool: false,
    text: "",
    items: [],
    counter: 0
  } 
 }


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
  items:todos,
  newItem:"",
  counter: this.state.counter +1,
 })
}

render(){
  let unfinshedItems = this.state.items.filter((i) => {
    rturn i.done===false;
  })

  let list - unfinishedItems.map((text,idx)=>{
    const deleteItem =()=>{
      let todos= _.cloneDeep(this.state.items)
      let findItem = _.find(todos,{id:item.id})
      findItem.done=true



!!!!!!!!!AQUI!!!!!!!!!!!!!





    }
  })
}





  changeText = (evt) => {
    this.setState({
      text: evt.target.value
    });
  }

  render() {
    let resList = []
    if(this.state.bool){
      resList.push(<div><li>{this.state.text}<button onClick={this.deletefunc}> delete this result </button></li></div>)
      this.state.bool=false
    }
    return(
        <div className="search-info"> 
            <Bar txt={this.state.text} takeText={this.changeText}/>
            <SubmitButton submit2= {this.submitfunc}/>
          <div> results: {resList} </div>
        </div>
    )
  }
}

class Bar extends Component {

  render() {
    return(
      <input placeholder="add an item" value={this.props.text} onChange={this.props.takeText} className= "bar"/>
    )
  }
}


class SubmitButton extends Component {

  render() {
    return(
      <div className="search-buttons"> 
          <SearchButton message="add" submit={this.props.submit2}/>
       </div>
    )
  }
}


class SearchButton extends Component {
  render() {
    return(
     <div>
        <button className="search-standard" onClick={this.props.submit}>{this.props.message}</button>

      </div>

    )
  }
}

export default App;