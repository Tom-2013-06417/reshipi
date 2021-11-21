/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticlesSeoUrl
// ====================================================

export interface ArticlesSeoUrl_articles {
  readonly __typename: "Article";
  readonly seoUrl: string;
}

export interface ArticlesSeoUrl {
  readonly articles: ReadonlyArray<(ArticlesSeoUrl_articles | null)> | null;
}
