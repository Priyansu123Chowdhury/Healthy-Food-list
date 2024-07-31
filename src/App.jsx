import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {

  let [foodItems, setFoodItems] = useState([])
  const onkeydown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = ''
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)

    }

  }
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnKeyDown={onkeydown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;