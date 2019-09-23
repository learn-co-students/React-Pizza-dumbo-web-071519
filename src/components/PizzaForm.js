import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={
                props.currPizza.topping
        } onChange={props.changeForm}/>
        </div>
        <div className="col">
          <select value={props.currPizza.size} name="size" className="form-control" onChange={props.changeForm}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
          <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={props.currPizza.vegetarian === "Vegetarian"} onChange={props.changeForm}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={props.currPizza.vegetarian !== "Vegetarian"} onChange={props.changeForm}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitForm}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
