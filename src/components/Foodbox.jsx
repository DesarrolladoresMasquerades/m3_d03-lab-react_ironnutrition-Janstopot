// Style Guide:
// In this file you can find a reference example of the structure
// that the component should have.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from "antd";
import { useState } from "react";

// Iteration 2
function FoodBox(props) {
    //console.log(props)
    const [food, setfood] = useState(props)

  return (
    <Col>
      <Card title={food.FoodBox.name} style={{ width: 230, height: 300, margin: 10 }} >
        <img src={food.FoodBox.image} height={60} alt="food" />
        <p>Calories: {food.FoodBox.calories} </p>
        <p>Servings: {food.FoodBox.servings} </p>
        <p>
          <b>Total Calories: {food.FoodBox.calories * food.FoodBox.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
