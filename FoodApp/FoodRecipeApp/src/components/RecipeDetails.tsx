import { useEffect, useState } from "react";
import "./recipeDetails.css"

interface RecipeItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

interface RecipeDetailsProps {
    recipe: RecipeItem;
}

interface ExtendedIngredient {
    name: string;
    original: string;
    image: string;
}

interface RecipeData {
    servings: number;
    readyInMinutes: number;
    cookingMinutes: number;
    instructions: string;
    extendedIngredients: ExtendedIngredient[];
    summary: string;
    winePairing: {
        pairedWines: string[];
        pairingText: string;
        productMatches: {
            id: number;
            title: string;
            description: string;
            price: string;
            imageUrl: string;
            averageRating: number;
            ratingCount: number;
            score: number;
            link: string;
        }[];
    };
}

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {

    const [recipeData, setFetchedData] = useState<RecipeData | null>(null);

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch recipe data");
                }

                const data = await response.json();
                setFetchedData(data);
            } catch (err: unknown) {
                console.log(err);
            }
        };

        fetchRecipeData();

    }, [recipe.id]);

    return (
        <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            {recipeData ? (
                <div className="extra-details">
                    <p><strong>Servings:</strong> {recipeData.servings}</p>
                    <p><strong>Ready In:</strong> {recipeData.readyInMinutes} minutes</p>
                    <p><strong>Cooking Time:</strong> {recipeData.cookingMinutes} minutes</p>
                    <div className="instructions-section">
                        <strong>Instructions:</strong>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: recipeData.instructions,
                            }}
                        />
                    </div>
                    <div className="summary-section">
                        <strong>Summary:</strong>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: recipeData.summary,
                            }}
                        />

                    </div>

                    <div className="ingredients-holder">
                        <h3>Ingredients</h3>
                        <ul className="list-items-prepare">
                            {recipeData.extendedIngredients.map((ingredient, index) => (
                                <li key={index}>
                                    <div>
                                        {ingredient.original}
                                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading recipe details...</p>
            )}
        </div>
    );
}
