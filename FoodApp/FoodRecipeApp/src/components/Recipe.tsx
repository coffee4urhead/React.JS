import "./recipe.css";

interface IRecipeProps {
    foodID: number;
    title: string;
    image: string;
    onClick: () => void; 
}

export default function Recipe({ foodID, title, image, onClick }: IRecipeProps) {
    return (
        <div className="recipe-card" onClick={onClick}>
            <img src={image} alt={title} />
            <h1 key={foodID}>{title}</h1>
            <button onClick={onClick}>Show Details</button>
        </div>
    );
}
