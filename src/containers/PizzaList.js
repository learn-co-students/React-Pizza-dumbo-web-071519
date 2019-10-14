import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  


  
allPizzas=() => { return this.props.pizzas.map( (pizza) => <Pizza
  pizza={pizza} 
/>
)}


  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">God-tier?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.allPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
