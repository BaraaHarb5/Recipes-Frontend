import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { searchRecipes } from "../api/recipeApi";

export default function HomePage() {
  const [results, setRecipesResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(undefined);
    try {
      const data = await searchRecipes(query);
      setRecipesResults(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch results. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="p-4">Loading...</p>}
      {error && <p className="p-4 text-red-600">{error}</p>}

      <div className="grid grid-cols-3 gap-4 mt-4">
        {results.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
