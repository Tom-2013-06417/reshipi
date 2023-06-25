import Head from 'next/head';
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import CreateRecipeFormComponent from '../components/CreateRecipeForm/CreateRecipeFormComponent';

export default function RecipePage() {
  return (
    <Fragment>
      <Head>
        <title>
          Create an article
        </title>
      </Head>

      <main className="lg:container mx-auto px-4 mb-20">
        <h1 className="text-4xl mt-8 mb-4">Create</h1>

        <div className="flex flex-col">
          <CreateRecipeFormComponent />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
