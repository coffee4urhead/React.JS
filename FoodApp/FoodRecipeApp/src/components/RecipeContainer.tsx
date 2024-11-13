import "./recipeContainer.css"
import Recipe from "./Recipe"

interface FoodData {
    results: Array<{ id: number, title: string, image: string, imageType: string}>;
}


interface IContainerProps { 
    foodData: FoodData | undefined;
    setFoodData: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
}

export default function RecipeContainer ({ foodData } : IContainerProps)  {
    return (
        <>
        <main>
            {foodData ? foodData.results.map(food => <Recipe key={food.id} foodID={food.id} title={food.title} image={food.image}/>) : "no data"}
        </main>
        </>
    )
}