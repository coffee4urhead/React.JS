import "./recipeContainer.css";
import Recipe from "./Recipe";
import RecipeNutrition from "./NutritionalLabel";
import React, { useState } from "react";

export interface RecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

interface FoodData {
    results: RecipeItem[];
}


interface IContainerProps {
    foodData: FoodData | undefined;
  setFoodData: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<RecipeItem | null>>;
}

export default function RecipeContainer({ foodData, setSelectedRecipe }: IContainerProps) {
  const [nutritionLabel, setNutritionLabel] = useState<string | null>(null);

  console.log(nutritionLabel);
  
    return (
        <main>
          {foodData
            ? foodData.results.map((food) => (
                <Recipe
                  key={food.id}
                  foodID={food.id}
                  title={food.title}
                  image={food.image}
                  onClick={() => setSelectedRecipe(food)} 
                />
              ))
            : "No data"}

           {foodData
        ? foodData.results.map((food) => (
            <RecipeNutrition
              key={food.id}
              title={food.title}
              recipeId={food.id}
              setNutritionLabel={setNutritionLabel} 
            />
          ))
        : "No data"}
        </main>
      );
}
