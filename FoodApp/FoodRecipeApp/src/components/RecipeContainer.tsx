import "./recipeContainer.css";
import Recipe from "./Recipe";

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
        </main>
      );
}
