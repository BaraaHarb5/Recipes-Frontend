import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails, getCaloriesExcluding } from "../api/recipeApi";
import IngredientSelector from "../components/IngredientSelector";

export default function RecipeDetailsPage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [calories, setCalories] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        load();
    }, [id]);

    const load = async () => {
        setError(null);

        try {
            const data = await getRecipeDetails(id);
            setRecipe(data);
            setCalories(data.totalCalories ?? data.total_calories ?? 0);
        } catch (err) {
            console.error(err);
            setError("Failed to load recipe details. Is the backend running?");
        }
    };

    const handleExclude = async (excluded) => {
        try {
            const result = await getCaloriesExcluding(id, excluded);
            setCalories(result.totalCalories);
        } catch (err) {
            console.error(err);
            setError("Failed to update calories.");
        }
    };

    if (error) return <p className="p-4 text-red-600">{error}</p>;
    if (!recipe) return <p className="p-4">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {recipe.title}
            </h1>

            {/* Image Container */}
            {recipe.image && (
                <div className="w-full flex justify-center mb-6">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="
                            rounded-xl shadow-md
                            max-h-[320px]
                            w-full object-cover
                        "
                    />
                </div>
            )}

            {/* Calories Box */}
            <div className="
                bg-blue-50 border border-blue-200
                p-4 rounded-lg shadow-sm mb-6
            ">
                <p className="text-xl font-semibold">
                    Total Calories:{" "}
                    <span className="text-blue-700">{calories}</span>
                </p>

                <p className="text-sm text-gray-600 mt-1">
                    Exclude ingredients below to dynamically recalculate calories.
                </p>
            </div>

            {/* Ingredients Header */}
            <h2 className="text-2xl font-bold mt-4 mb-3">
                Ingredients
            </h2>

            {/* Ingredient Selector */}
            <IngredientSelector
                ingredients={recipe.extendedIngredients}
                onExclude={handleExclude}
            />

            {/* Ingredient List */}
            <ul className="list-disc pl-5 mt-4 space-y-1 text-gray-700">
                {recipe.extendedIngredients.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                ))}
            </ul>
        </div>
    );
}
