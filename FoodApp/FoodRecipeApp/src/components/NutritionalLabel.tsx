import { useState, useEffect } from 'react';

interface Props {
    recipeId: number;
    setNutritionLabel: React.Dispatch<string | null>;
    title: string;
}

export default function RecipeNutrition ({ recipeId, title }: Props) {
  const [nutritionLabel, setNutritionLabel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchNutrition = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch nutrition data');
        }
        const data = await response.text();  
        setNutritionLabel(data);
      } catch (err) {
        if(err instanceof Error){
            setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNutrition();
  }, [recipeId, apiUrl]);  

  if (loading) {
    return <div>Loading nutritional information...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Nutrition Information for: {title}</h3>
      <div>
        {nutritionLabel ? (
        <div dangerouslySetInnerHTML={{ __html: nutritionLabel }} />
      ) : (
        <p>No nutritional information available.</p>  
      )}
      </div>
    </div>
  );
};
