import { useState } from "react";

export default function IngredientSelector({ ingredients, onExclude }) {
  const [selected, setSelected] = useState([]);

  const toggle = (name) => {
    const updated = selected.includes(name)
      ? selected.filter((i) => i !== name)
      : [...selected, name];

    setSelected(updated);
    onExclude(updated);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-semibold mb-2">Exclude Ingredients</h3>

      <div className="grid grid-cols-2 gap-2">
        {ingredients.map((ing) => (
          <label key={ing.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => toggle(ing.name)}
            />
            {ing.name}
          </label>
        ))}
      </div>
    </div>
  );
}
