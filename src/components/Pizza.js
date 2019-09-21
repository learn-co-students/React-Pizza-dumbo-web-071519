import React from "react"

//! Thing I learned: This is a STATLESS FUNCTIONAL COMPONENT
//! This means that my props have to be passed as "arguments" with {} around them
//! Also there is no state here AND you can't use `this`
const Pizza = ({pizza, editPizza}) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => editPizza(pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
