import React from "react"


class PizzaForm extends React.Component {

  state = {
    topping: "",
    size: "",
    vegetarian: true
  }

  handleToppingChange = (event) => {
    this.setState({ topping: event.target.value })
  }

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value })
  }


  
  sortThings = (event) => {
    if(event.target.value === "Vegetarian"){
    this.setState({vegetarian: true})
    }else {
    this.setState({vegetarian: false})
    }}




  render() {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange = { this.handleToppingChange }type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping}/>
        </div>
        <div className="col">
          <select onChange = { this.handleSizeChange } value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="sort" value="Vegetarian" defaultChecked={true}  onChange={(event)=>this.sortThings(event)}/>
            <label className="form-check-label">
             Vegan
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio"  name="sort" value="Not Vegetarian" checked={null}  onChange={(event)=>this.sortThings(event)}/>
            <label className="form-check-label">
              Non Vegan
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e)=>this.props.handleFormSubmit(e, this.state)}>Submit</button>
        </div>
      </div>
  )}}

  
export default PizzaForm;
