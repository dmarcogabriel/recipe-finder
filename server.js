import jsonServer from 'json-server';
import express from 'express';

const server = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const Sort = {
    'name': recipes => recipes.sort((a, b) => a.name.localeCompare(b.name)),
    'ingredientCount': recipes => recipes.sort((a, b) => a.ingredients.length - b.ingredients.length),
    'prepTime': recipes => recipes.sort((a, b) => a.prepTime - b.prepTime)
}

server.get('/recipes', ({query}, res) => {
    const { search } = query;

    const recipes = router.db.get('recipes').value();

    let filteredRecipes = recipes;

    if (search) {
        const ingredients = search.split(',').map(i => i.trim().toLowerCase());
        filteredRecipes = recipes.filter(recipe =>
            recipe.ingredients.some(ingredient =>
                ingredients.includes(ingredient.name.toLowerCase())
            )
        );
    }

    if (query.sortBy) {
        try {
            const sortedRecipes = Sort[query.sortBy](filteredRecipes);

            return res.send(sortedRecipes)
        } catch (e) {
            return res.send(filteredRecipes);
        }
    }
    
    return res.send(filteredRecipes);
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
