import React from "react"

const PizzaForm = ({parentState, handleChange, handleSubmit}) => {
  return(
      <form className="form-row" onChange={(e) => {handleChange(e.target)}} onSubmit={(e) => handleSubmit(e)}>
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={parentState.topping} name="topping"/>
        </div>
        <div className="col">
          <select value={parentState.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="true" name="vegetarian" checked={parentState.vegetarian ? 'checked' : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="false" name="vegetarian" checked={parentState.vegetarian ? null : 'checked'}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
  )
}

export default PizzaForm
