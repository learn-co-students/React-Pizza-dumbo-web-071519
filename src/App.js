import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const DEFAULT_STATE = {
  pizzas: [],
  id: '',
  topping: '',
  size: '',
  vegetarian: ''
}
const URL = "http://localhost:3000/pizzas"


class App extends Component {

  state = {
    ...DEFAULT_STATE
  }

  putPizzaIntoForm = ({id, topping, size, vegetarian}) => {
    this.setState({
      id,
      topping,
      size,
      vegetarian: vegetarian ? "Vegetarian" : "Not Vegetarian"
    })
  }

  changeForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.postPizza();
  }
  componentDidMount = () => {
    this.getPizzas();
  }
  

  getPizzas = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data =>
      this.setState({
        pizzas: data
      })
      )
  }

  postPizza = () => {
    fetch(URL + `/${this.state.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': "application/json",
        "Accept": "application/json"
      }, 
      body:JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: this.state.vegetarian === "Vegetarian" ? true : false
      })
    }).then(res => res.json())
    .then(data => {
      this.afterPost();
    })
  }

  afterPost = () => {
    //reset the form
    this.setState({
      ...DEFAULT_STATE
    })
    this.getPizzas();
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm  submitForm={this.submitForm} changeForm={this.changeForm} currPizza={this.state}/>
        <PizzaList  putPizzaIntoForm={this.putPizzaIntoForm} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
