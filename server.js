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

server.post('/favorited', ({ body }, res) => {
    const { recipeId } = body;

    // This is to prevent item duplicates
    const favoritedRecipe = router.db
        .get('favorited')
        .find(favorited => favorited.id === recipeId)
        .value();

    if (favoritedRecipe) return res.status(204).send();

    const recipe = router.db
        .get('recipes')
        .find({ id: recipeId })
        .value();

    router.db.get('favorited').push(recipe).write();

    return res.status(204).send();
});

server.delete('/favorited/:recipeId', ({ params }, res) => {
    const recipeId = params.recipeId;

    const favoritedRecipe = router.db
        .get('favorited')
        .find(favorited => favorited.id === recipeId)
        .value();

    if (favoritedRecipe) {
        router.db
            .get('favorited')
            .remove({ id: recipeId })
            .write();
    }

    res.status(204).send();
});

server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
