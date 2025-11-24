# Recipe Frontend (Vite + React)

This is the React frontend for the Recipe Search assignment.

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:5173

> The frontend expects a backend at `http://localhost:8080/api/recipes`.
> - `GET /api/recipes/search?query=...` -> returns array of { id, title, image }
> - `GET /api/recipes/{id}` -> returns recipe details with `ingredients` and `totalCalories`
> - `POST /api/recipes/{id}/exclude` body `{ excludedIngredients: [...] }` -> returns `{ updatedCalories }`

## Notes
- Tailwind is configured and ready; run the install steps for tailwind if you want to build CSS tooling locally.
- This repo intentionally keeps UI-focused code; you'll need to implement the Spring Boot backend to proxy Spoonacular requests.
