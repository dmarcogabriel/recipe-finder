export type IIngredient = {
  id: string
  name: string
  quantity: string
};

export type IInstruction = {
  id: string
  step: string
};

export type IRecipe = {
  id: string
  name: string
  photo: string
  ingredients: IIngredient[]
  instructions: IInstruction[]
  prepTime: number
};

export type ISortRecipeQuery = 'ingredientCount' | 'name' | 'prepTime';
