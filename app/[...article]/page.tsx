import qs from 'qs';
import { Metadata } from 'next';
import { Article } from '../../generated/payload-types';
import { CMS_API } from '../../config';
import ArticleComponent from '../../components/Article/Article';

export const dynamicParams = false;

interface Params {
  readonly params: {
    readonly article: readonly string[];
  };
}

async function getArticle(slug: readonly string[]): Promise<Article> {
  const articleQuery = {
    seo_url: {
      equals: `/${Array.isArray(slug) ? slug?.join('/') : slug}`,
    },
  };

  const stringifiedQuery = qs.stringify(
    {
      where: articleQuery,
    },
    { addQueryPrefix: true },
  );

  const articleResponse = await fetch(`${CMS_API}/articles${stringifiedQuery}`);
  const [article]: [Article] = (await articleResponse.json()).docs;

  return article;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = await getArticle(params.article);
  const metadata: Metadata = { title: `${article.title} | Reshipi` };
  return metadata;
}

export default async function ArticlePage({ params }: Params) {
  const article = await getArticle(params.article);

  if (!article || !article.recipe || typeof article.recipe === 'string') {
    return <h1>404 not found</h1>;
  }

  return <ArticleComponent article={article}></ArticleComponent>;
}
