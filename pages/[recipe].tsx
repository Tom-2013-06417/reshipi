import Head from "next/head";
import Footer from "../components/Footer/Footer";
import RecipeComponent, { Recipe } from "../components/Recipe/Recipe";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export interface RecipeArticle {
  body: string;
  recipe: Recipe;
  seoDescription: string;
  seoUrl: string;
  title: string;
}

interface RecipePageProps {
  article: RecipeArticle;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/recipes`);
  const articles: RecipeArticle[] = await response.json();
  const paths = articles.map((article) => ({
    params: { recipe: article.seoUrl },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<RecipePageProps> = async (context) => {
  const response = await fetch(`http://localhost:3000/api/recipes?seoUrl=${context.params?.recipe}`);
  const article: RecipeArticle = await response.json();

  return { props: { article } };
};

export default function RecipePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const app = {
    title: "Reshipi",
  };

  return (
    <>
      <Head>
        <title>
          {article.title} | {app.title}
        </title>
        <meta name="description" content={article.seoDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:container mx-auto px-4 mb-20">
        <h1 className="text-4xl my-8">{article.title}</h1>

        <div className="flex flex-col">
          <div className="mb-5">{article.body}</div>

          <RecipeComponent recipe={article.recipe} />
        </div>
      </main>

      <Footer />
    </>
  );
}
