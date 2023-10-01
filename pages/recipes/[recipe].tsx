import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import qs from 'qs';
import { Footer } from '../../components/Footer/Footer';
import { RecipeComponent } from '../../components/Recipe/Recipe';
import { Recipe } from '../../generated/payload-types';
import { CMS_API } from '../../config';

interface Props {
  recipe: Recipe;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${CMS_API}/recipes`);
  const recipes = await response.json();
  const paths: string[] = recipes.docs.map(
    (recipe: Recipe) => `/recipes/${recipe.seo_url}`,
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const query = {
    seo_url: {
      equals: context.params?.recipe,
    },
  };
  const stringifiedQuery = qs.stringify(
    {
      where: query,
      depth: 1,
    },
    { addQueryPrefix: true },
  );

  const response = await fetch(`${CMS_API}/recipes${stringifiedQuery}`);
  const [recipe] = (await response.json()).docs;

  return { props: { recipe } };
};

export default function RecipePage({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const app = {
    title: 'Reshipi',
  };

  if (!recipe) {
    return <h1>404 not found</h1>;
  }

  return (
    <Fragment>
      <Head>
        <title>
          {recipe?.title} | {app.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container max-w-screen-md mx-auto px-4 min-h-screen">
        <div className="min-h-[45vh]"></div>

        <div className="flex flex-col">
          <RecipeComponent recipe={recipe} />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
