import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    return (
        <div  className="bg-white  border border-gray-200 shadow-sm
                    hover:shadow-2xl hover:border-transparent
                    transition-all duration-300 overflow-hidden
                    group cursor-pointer">

      
            <div className="relative   overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title || "Recipe image"}
                    className="object-cover transform
                     group-hover:scale-110 transition-all duration-500"
                />

           
            </div>

           
            <div className="p-5 space-y-3">

           
                <h3 className="font-bold text-xl text-gray-800 leading-snug
                       group-hover:text-blue-600 transition-colors line-clamp-2">
                    {recipe.title}
                </h3>

              
                {recipe.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {recipe.description}
                    </p>
                )}

           
                {recipe.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                        {recipe.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full
                           border border-blue-100"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}

                {/* CTA Button */}
                <div className="pt-2">
                    <Link
                        to={`/recipe/${recipe.id}`}
                        className="inline-flex items-center gap-1 text-blue-600 font-medium
                       hover:text-blue-800 transition-all
                       group-hover:gap-2 duration-300"
                    >
                        View Details
                        <span className="material-icons text-sm">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
