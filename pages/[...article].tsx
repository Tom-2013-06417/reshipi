import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import qs from 'qs';
import { Footer } from '../components/Footer/Footer';
import { RecipeComponent } from '../components/Recipe/Recipe';
import { Article } from '../generated/payload-types';
import { CMS_API } from '../config';
import { RichText } from '../components/RichText/RichText';
import { Node } from '../components/RichText/types';

interface Props {
  article: Article;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${CMS_API}/articles`);
  const articles = await response.json();
  const paths: string[] = articles.docs.map(
    (article: Article) => article.seo_url,
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const query = {
    seo_url: {
      equals: `/${
        Array.isArray(context.params?.article)
          ? context.params?.article?.join('/')
          : context.params?.article
      }`,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    { addQueryPrefix: true },
  );

  const response = await fetch(`${CMS_API}/articles${stringifiedQuery}`);
  const [article] = (await response.json()).docs;

  return { props: { article } };
};

export default function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const app = {
    title: 'Reshipi',
  };

  if (!article || !article.recipe || typeof article.recipe === 'string') {
    return <h1>404 not found</h1>;
  }

  return (
    <Fragment>
      <Head>
        <title>
          {article?.title} | {app.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-screen-md mx-auto px-4 font-thin min-h-screen">
        <h1 className="my-8">{article.title}</h1>

        <div className="flex flex-col">
          <RichText content={article.content as Node[]} />

          <RecipeComponent recipe={article.recipe} />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
