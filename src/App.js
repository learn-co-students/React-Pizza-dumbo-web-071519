import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzasURL = 'http://localhost:3000/pizzas'


class App extends Component {
  state = {
    pizzas : [],
    adding: true,
    topping: '',
    size: 'Small',
    vegetarian: true
  }
  handleChange = (target) => {
    if (target.name === "vegetarian"){
      let status = target.value === "true" ? true : false
      this.setState({
        [target.name] : status
      })
      return
    }
    else {
      this.setState({
        [target.name] : target.value
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let {topping, size, vegetarian} = this.state
    let config
    if(this.state.adding){
      config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ topping, size, vegetarian })
      }
      fetch(pizzasURL,config)
      .then(r => r.json())
      .then(pizza => {
        this.setState({
          pizzas: [...this.state.pizzas, pizza],
          topping: '',
          size: 'Small',
          vegetarian: true,
          adding: true
        })
      })
    }
    else{
      debugger
    }
  }
  editPizza = (pizza) => {
    let {topping, size, vegetarian} = pizza
    console.log("Editing this Pizza", pizza)
    //! Still need to work on this for later
    // this.setState({
    //   adding: false,
    //   topping,
    //   size,
    //   vegetarian
    // })
  }
  componentDidMount() {
    fetch(pizzasURL)
      .then(r => r.json())
      .then(pizzasData => {
        this.setState({
          pizzas: pizzasData
        })
      })
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm parentState={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
