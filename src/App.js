import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    topping: ""
  }

  handleChange=(event)=> {  
      this.setState({topping: event.target.value}) 
      }

      

      handleSubmit=()=> {  
        this.setState({topping: "hello"}) 
        }

       
  

  componentDidMount() {
  fetch('http://localhost:3000/pizzas')
  .then(res => res.json())
  .then( data => this.setState ({
    pizzas: data
  }))}

  

  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm isVeg={this.isVeg} topping={this.handleChange} handleSubmit= {this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
