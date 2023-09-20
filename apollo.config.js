module.exports = {
  client: {
    includes: ['./pages/**/*.tsx', './pages/**/*.ts'],
    service: {
      name: 'reshipi',
      url: 'http://localhost:4000/api/graphql',
    },
  },
};
