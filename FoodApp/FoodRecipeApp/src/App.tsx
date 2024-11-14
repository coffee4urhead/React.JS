import Search from "./components/Search";
import Footer from "./components/Footer";
import { useState } from "react";
import RecipeContainer from "./components/RecipeContainer";
import RecipeDetails from "./components/RecipeDetails";
import { RecipeItem } from "./components/RecipeContainer";

interface FoodData {
  results: Array<{ id: number; title: string; image: string; imageType: string }>;
}

export default function App() {
  const [foodData, setFoodData] = useState<FoodData | undefined>();
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  return (
    <>
      <div className="top">
        <Search foodData={foodData} setFoodData={setFoodData}></Search>
      </div>

      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}

      <RecipeContainer foodData={foodData} setFoodData={setFoodData} setSelectedRecipe={setSelectedRecipe} />

      <Footer />
    </>
  );
}
