import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import { gql } from '@apollo/client';
import Footer from '../components/Footer/Footer';
import RecipeComponent from '../components/Recipe/Recipe';
import client from '../apollo-client';
import { ArticlesSeoUrl } from '../__generated__/ArticlesSeoUrl';
import { Article } from '../__generated__/Article';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query ArticlesSeoUrl {
        articles {
          seoUrl
        }
      }
    `,
  });

  const { articles }: ArticlesSeoUrl = data;

  const paths =
    articles?.map(article => ({
      params: { recipe: article?.seoUrl },
    })) || [];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Article> = async context => {
  const { data } = await client.query({
    query: gql`
      query Article($seoUrl: String) {
        article(seoUrl: $seoUrl) {
          _id
          title
          seoDescription
          body
          recipe {
            title
            description
            ingredients {
              amount {
                unit
                value
              }
              name
            }
            steps {
              value
            }
          }
        }
      }
    `,
    variables: {
      seoUrl: context.params?.recipe,
    },
  });

  return { props: { article: data.article } };
};

export default function RecipePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const app = {
    title: 'Reshipi',
  };

  if (!article) {
    return <h1>404 not found</h1>;
  }

  return (
    <Fragment>
      <Head>
        <title>
          {article?.title} | {app.title}
        </title>
        <meta name="description" content={article.seoDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:container mx-auto px-4 mb-20 font-thin">
        <h1 className="text-4xl my-8">{article.title}</h1>

        <div className="flex flex-col">
          <div className="mb-5">{article.body}</div>

          <RecipeComponent recipe={article.recipe} />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
