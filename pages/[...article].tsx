import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import qs from 'qs';
import { Footer } from '../components/Footer/Footer';
import { RecipeComponent } from '../components/Recipe/Recipe';
import { Article, User } from '../generated/payload-types';
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
  const articleQuery = {
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
      where: articleQuery,
    },
    { addQueryPrefix: true },
  );

  const articleResponse = await fetch(`${CMS_API}/articles${stringifiedQuery}`);
  const [article]: [Article] = (await articleResponse.json()).docs;

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

  const isUser = (user: string | User): user is User =>
    typeof user !== 'string';

  const author = isUser(article.author) ? (
    <div className="mb-4 text-lg font-normal leading-8">
      {article.author.firstName} {article.author.lastName}
    </div>
  ) : (
    <></>
  );

  return (
    <Fragment>
      <Head>
        <title>
          {article?.title} | {app.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-screen-md mx-auto px-4 font-thin min-h-screen">
        <div className="min-h-[45vh]"></div>
        <h1 className="my-4">{article.title}</h1>
        {author}

        <div className="flex flex-col">
          <div className="mb-20">
            <RichText content={article.content as Node[]} />
          </div>

          <RecipeComponent className="mb-20" recipe={article.recipe} />
        </div>
      </main>
    </Fragment>
  );
}
