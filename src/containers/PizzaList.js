import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


  mapPizzaList = () => {
   return this.props.pizzas.map((pizza) =>{
    return <Pizza pizzaInfo={pizza} key={pizza.id} putPizzaIntoForm={this.props.putPizzaIntoForm}/>
    } )
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.mapPizzaList()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
