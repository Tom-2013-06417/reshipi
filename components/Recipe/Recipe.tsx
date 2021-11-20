export interface IngredientAmount {
  value: number;
  unit?: string;
}

export interface Ingredient {
  id: number;
  name: string;
  amount: IngredientAmount;
}

export interface Step {
  id: number;
  value: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: readonly Ingredient[];
  steps: readonly Step[];
}

export interface RecipeProps {
  recipe: Recipe;
}

export default function RecipeComponent(props: RecipeProps) {
  const { recipe } = props;

  const ingredientsHtml = recipe.ingredients.map(ingredient => (
    <div key={ingredient.id} className="flex items-center mb-1">
      <input type="checkbox" className="mr-3 w-4 h-4" />
      <span>
        {ingredient.amount.value} {ingredient.amount?.unit} {ingredient.name}
      </span>
    </div>
  ));

  const stepsHtml = recipe.steps.map(step => (
    <p key={step.id} className="mb-3">
      {step.value}
    </p>
  ));

  return (
    <div>
      <h3>{recipe.title}</h3>
      <div className="mb-3">{recipe.description}</div>
      <div className="mb-3">{ingredientsHtml}</div>
      <div>{stepsHtml}</div>
    </div>
  );
}
