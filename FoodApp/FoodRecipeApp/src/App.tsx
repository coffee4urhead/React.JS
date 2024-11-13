import Search from "./components/Search"
import Footer from "./components/Footer"
import { useState } from "react";
import RecipeContainer from "./components/RecipeContainer"

interface FoodData {
  results: Array<{ id: number, title: string, image: string, imageType: string}>;
}

export default function App() {
  const [foodData, setFoodData] = useState<FoodData | undefined>();
  return (
    <>
      <div className="top">
        <Search foodData={foodData} setFoodData={setFoodData}></Search>
        {/* {foodData ? foodData.results.map(food => <h1 key={food.id}>{food.title}</h1>) : "no data"} */}
      </div>
      <RecipeContainer foodData={foodData} setFoodData={setFoodData}/>
      <Footer/>
    </>
  )
}

// API_KEY=2fb6249a9769443291419e9ed0ac7148
