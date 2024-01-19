import { Metadata } from 'next';
import { Article } from '../generated/payload-types';
import { CMS_API } from '../config';
import Home from '../components/Home/Home';

export const metadata: Metadata = {
  title: 'Reshipi',
  description: 'A simpler recipe app'
}

async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${CMS_API}/articles`);
  const articles = await response.json();

  return articles.docs;
}

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <Home articles={articles}></Home>
  );
}
