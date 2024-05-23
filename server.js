import jsonServer from 'json-server';
import express from 'express';

const server = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/recipes', ({query}, res) => {
    const { search } = query;

    const recipes = router.db.get('recipes').value();
  
    if (!search) return res.send(recipes);

    const ingredients = search.split(',').map(i => i.trim().toLowerCase());
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient =>
            ingredients.includes(ingredient.name.toLowerCase())
        )
    );

    res.json(filteredRecipes);
});

server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
