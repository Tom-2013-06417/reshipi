export function mockRecipeArticles() {
  return [
    {
      title: 'Best Korean Side Dish',
      seoDescription: 'This side dish will make your heart yell yum.',
      seoUrl: 'best-korean-side-dish',
      body: 'We have lots of korean side dishes, but for today, let me introduce you to an all new best selling secret ingredient to korean banchan.',
      recipe: {
        id: 2,
        title: 'Fishcake',
        description: 'A must have',
        ingredients: [
          {
            id: 1,
            amount: { value: 1, unit: 'sheet' },
            name: 'Fish cake',
          },
          { id: 2, amount: { value: 3, unit: 'tbsp' }, name: 'Gochugaru' },
          { id: 3, amount: { value: 1, unit: 'tbsp' }, name: 'Oil' },
        ],
        steps: [
          { id: 1, value: 'Preheat oil in a pan.' },
          {
            id: 2,
            value: 'In a chopping board, chop fish cake into squares',
          },
          {
            id: 3,
            value: 'Fry the fish cakes until brown',
          },
          {
            id: 4,
            value: 'Once the fish cakes have browned, add in the gochugaru.',
          },
          {
            id: 5,
            value: 'Serve in a small plate and enjoy.',
          },
        ],
      },
    },
  ];
}

export default mockRecipeArticles;
