import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import qs from 'qs';
import Footer from '../components/Footer/Footer';
import RecipeComponent from '../components/Recipe/Recipe';
import { Article } from '../generated/payload-types';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:4000/api/articles');
  const articles = await response.json();
  const paths: string[] = articles.docs.map(
    (article: Article) => article.seo_url,
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  article: Article;
}> = async context => {
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

  const response = await fetch(
    `http://localhost:4000/api/articles${stringifiedQuery}`,
  );
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

      <main className="lg:container mx-auto px-4 mb-20 font-thin">
        <h1 className="text-4xl my-8">{article.title}</h1>

        <div className="flex flex-col">
          {/* <div className="mb-5">{article.content}</div> */}

          <RecipeComponent recipe={article.recipe} />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
