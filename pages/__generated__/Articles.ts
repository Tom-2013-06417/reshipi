/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Articles
// ====================================================

export interface Articles_articles {
  readonly _id: string;
  readonly title: string;
  readonly seoDescription: string;
  readonly seoUrl: string;
  readonly body: string;
}

export interface Articles {
  readonly articles: ReadonlyArray<(Articles_articles | null)> | null;
}
