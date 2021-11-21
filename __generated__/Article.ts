/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Article
// ====================================================

export interface Article_article_recipe_ingredients_amount {
  readonly __typename: "IngredientAmount";
  readonly unit: string | null;
  readonly value: string | null;
}

export interface Article_article_recipe_ingredients {
  readonly __typename: "Ingredient";
  readonly id: number | null;
  readonly amount: Article_article_recipe_ingredients_amount;
  readonly name: string;
}

export interface Article_article_recipe_steps {
  readonly __typename: "RecipeSteps";
  readonly id: number | null;
  readonly value: string;
}

export interface Article_article_recipe {
  readonly __typename: "Recipe";
  readonly title: string;
  readonly description: string;
  readonly ingredients: ReadonlyArray<Article_article_recipe_ingredients>;
  readonly steps: ReadonlyArray<Article_article_recipe_steps>;
}

export interface Article_article {
  readonly __typename: "Article";
  readonly _id: string;
  readonly title: string;
  readonly seoDescription: string;
  readonly body: string;
  readonly recipe: Article_article_recipe;
}

export interface Article {
  readonly article: Article_article | null;
}

export interface ArticleVariables {
  readonly seoUrl?: string | null;
}
