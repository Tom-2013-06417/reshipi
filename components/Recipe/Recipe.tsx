import { Fragment } from 'react';
import { Recipe } from '../../generated/payload-types';

interface Props {
  recipe: Recipe;
}

export const RecipeComponent: React.FC<Props> = ({ recipe }) => {
  if (!recipe.ingredients) {
    return <></>;
  }

  if (!recipe.steps) {
    return <></>;
  }

  const ingredientsHtml = recipe.ingredients ? (
    recipe?.ingredients.map((ingredient, i) => {
      const x = ingredient.ingredient;

      if (x !== undefined && typeof x !== 'string') {
        const ingredientName = x.name;
        return (
          <div key={i} className="mb-5">
            {ingredient.amount} {ingredient.unit} {ingredientName}
          </div>
        );
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
      <h2 className="text-4xl mb-8">{recipe.title}</h2>
      <div className="mb-3">{ingredientsHtml}</div>
      <div>{stepsHtml}</div>
    </div>
  );
};
