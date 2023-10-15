import { Fragment } from 'react';
import { Recipe } from '../../generated/payload-types';

interface Props {
  recipe: Recipe;
  className?: string;
}

export const RecipeComponent: React.FC<Props> = ({ recipe, className }) => {
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
          <div
            key={i}
            className="flex items-center mb-3 text-lg font-normal leading-8"
          >
            <input className="mr-3 w-4 h-4" type="checkbox" />
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
    <div className={className}>
      <h2 className="text-4xl mb-4">{recipe.title}</h2>
      <div className="mb-8">{ingredientsHtml}</div>
      <hr className="mb-8" />
      <div>{stepsHtml}</div>
    </div>
  );
};
