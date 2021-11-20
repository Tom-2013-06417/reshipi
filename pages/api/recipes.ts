import { NextApiRequest, NextApiResponse } from 'next';
import { mockRecipeArticles } from '../../library/recipe-article/recipe-article.mock';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const articles = mockRecipeArticles();
  const { seoUrl } = req.query;

  if (!seoUrl) {
    res.status(200).json(articles);
  }

  const article = articles.find(a => a.seoUrl === seoUrl);
  if (!article) {
    return res.status(404);
  }

  return res.status(200).json(article);
}
