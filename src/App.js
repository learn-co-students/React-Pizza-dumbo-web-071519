import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    displayedPizzas: []
  }

  sortThings = (event) => {
    if(event === "Vegetarian"){
    this.setState({displayedPizzas : this.state.displayedPizzas.sort((thingA, thingB) => thingA.topping > thingB.topping ? 1 : -1)})
    }else {
    this.setState({displayedPizzas : this.state.displayedPizzas.sort((thingA, thingB) => thingA.size > thingB.size ? -1 : 1)})
    }}


      handleFormSubmit=(e, newPizza)=>{
        e.preventDefault()
        this.setState({
          pizzas: [...this.state.pizzas, newPizza]
        }),
        console.log(newPizza)
      }

       
  

  componentDidMount() {
  fetch('http://localhost:3000/pizzas')
  .then(res => res.json())
  .then( data => this.setState ({
    pizzas: data,
    displayedPizzas: data
  }))}

  

  

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm isVeg={this.isVeg} handleFormSubmit= {this.handleFormSubmit}  sortThings={this.sortThings}/>
        <PizzaList pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
