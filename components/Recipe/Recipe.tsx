import { Fragment } from 'react';
import { Recipe } from '../../generated/payload-types';

export default function RecipeComponent({ recipe }: { recipe: Recipe }) {
  if (!recipe.ingredients) {
    return <></>;
  }

  if (!recipe.steps) {
    return <></>;
  }

  const ingredientsHtml = recipe.ingredients ? (
    recipe?.ingredients.map(ingredient => {
      const x = ingredient.ingredient;

      if (x !== undefined && typeof x !== 'string') {
        const ingredientName = x.name;
        <div className="mb-5">
          {ingredient.amount} {ingredient.unit} {ingredientName}
        </div>;
      }

      return undefined;
    })
  ) : (
    <Fragment />
  );

  const stepsHtml = recipe.steps.map((step, index) => (
    <p key={index} className="mb-3">
      {step.step}
    </p>
  ));

  return (
    <div>
      <h3>{recipe.title}</h3>
      <div className="mb-3">{ingredientsHtml}</div>
      <div>{stepsHtml}</div>
    </div>
  );
}
