// Style Guide:
// In this file you can find a reference example of the structure
// that the component should have.
// Remember to import Ant Design components before using them.
import { Divider, Input } from "antd";
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {

    const [newFood, setNewFood] = useState({
        name: "",
        image: "",
        calories: null,
        servings: null
    })

function handleDataChange(event){
    const inputName = event.target.name
    let value = event.target.value
    
    
    setNewFood(newFood=> ({...newFood, [inputName]: value}))
    //console.log(newFood.name)
    
}

function handleSubmit(event){
    event.preventDefault()
    

    props.addFood(newFood)
    setNewFood({
        name: "",
        image: "",
        calories: null,
        servings: null
    })
}

  return (

    <div className="AddFoodForm">
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      
      <label>Name</label>
      <Input value={undefined} name="name" type="text" onChange={handleDataChange} />

      <label>Image</label>
      <Input value={undefined} name="image" type="text" onChange={handleDataChange}/> 

      <label>Calories</label>
      <Input value={undefined} name="calories" type="number" onChange={handleDataChange}/>

      <label>Servings</label>
      <Input value={undefined} name="servings" type="number" onChange={handleDataChange}/>

      <button type="submit">Create</button>
    </form>
    </div>
  );
}

export default AddFoodForm;