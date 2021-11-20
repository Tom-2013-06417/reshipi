import { InMemoryCache, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        articles: {
          keyArgs: false,
          merge(existing, incoming) {
            let articles: Reference[] = [];

            if (existing && existing.articles) {
              articles = articles.concat(existing.articles);
            }

            if (incoming && incoming.articles) {
              articles = articles.concat(incoming.articles);
            }

            return {
              ...incoming,
              articles,
            };
          },
        },
      },
    },
  },
});

export default cache;
