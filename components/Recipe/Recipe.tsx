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
            className="flex items-center mb-2 text-lg font-normal leading-8"
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
    <div key={index}>
      <div className="flex items-center mb-6">
        <span className="mr-3">
          {index + 1}
        </span>
        <hr className="w-full"></hr>
      </div>
      <p className="mb-6">
        {step.step}
      </p>
    </div>
  ));

  return (
    <div className={className}>
      <h2 className="text-4xl mb-4">{recipe.title}</h2>
      <div className="mb-12">{ingredientsHtml}</div>
      <div>{stepsHtml}</div>
    </div>
  );
};
