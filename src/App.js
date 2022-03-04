// src/App.js
import "./App.css";
import foodsList from "./foods.json";
import { useState } from "react";
import Foodbox from "./components/Foodbox.jsx"
import AddFoodForm from "./components/AddFoodForm.jsx"
import Search from "./components/Search"

function App() {
  const [foodData, setFoodData] = useState(foodsList)
  const [foods, setfoods] = useState(foodsList);

function addNewFood(newFood){
  const updatedFoodsData = [...foodData, newFood]
  const updatedFoods = [...foods, newFood]

  setFoodData(updatedFoodsData)
  setfoods(updatedFoods)
}

function searchFood(str){
  let results;
  if (str === ""){
    results = foodData
  }
}



  return (
    <div className="App">
      <div>
          <Search addFood={searchFood}/>
          <AddFoodForm addFood={addNewFood} />
        {foods.map((food, idx) => {
          return (
            <div key={food.name + `${idx}`}>
            <Foodbox  FoodBox={food} />

            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
