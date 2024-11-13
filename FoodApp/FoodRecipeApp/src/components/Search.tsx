import { useEffect, useState } from "react"
import "./search.css"

interface FoodData {
    results: Array<{ id: number, title: string, image: string, imageType: string}>;
}


interface ISearchProps { 
    foodData: FoodData | undefined;
    setFoodData: React.Dispatch<React.SetStateAction<FoodData | undefined>>;
}

const URL: string = "https://api.spoonacular.com/recipes/complexSearch?";
const API_KEY= import.meta.env.VITE_REACT_APP_API_KEY;
export default function Search({ setFoodData }: ISearchProps) {
    const [val, setVal] = useState("pizza");
    
    const fetchFoodData = async (query: string): Promise<FoodData> => {
        const response = await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data: FoodData = await response.json();  
        return data;
    };
    
    useEffect(() => {
        async function fetchFood() {
            try {
                const data = await fetchFoodData(val); 
                setFoodData(data);
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        }
    
        if (val) { 
            fetchFood();
        }
    }, [val]);

    return (
        <>
        <header id="head-section">
            <img src="../../cutlery.png"/>
        <input onChange={(e) => setVal(e.target.value)} value={val} type="text"/>

        </header>
        </>
    )
}