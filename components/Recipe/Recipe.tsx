import { Article_article_recipe } from '../../__generated__/Article';

export default function RecipeComponent({
  recipe,
}: {
  recipe: Article_article_recipe;
}) {
  const ingredientsHtml = recipe.ingredients.map((ingredient, index) => (
    <div key={index} className="flex items-center mb-1">
      <input type="checkbox" className="mr-3 w-4 h-4" />
      <span>
        {ingredient?.amount?.value} {ingredient?.amount?.unit} {ingredient.name}
      </span>
    </div>
  ));

  const stepsHtml = recipe.steps.map((step, index) => (
    <p key={index} className="mb-3">
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
