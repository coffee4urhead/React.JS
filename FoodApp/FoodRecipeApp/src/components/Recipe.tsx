import "./recipe.css"

interface IRecipeProps {
    foodID: number;
    title: string;
    image: string;
}

export default function Recipe({ foodID, title, image }: IRecipeProps) {
    { console.log(title, image); }
    return (
        <>
            <div className="recipe-card">
                <img src={image}></img>
                <h1 key={foodID}>{title}</h1>
                <button>How to make</button>
            </div>
        </>
    )
}