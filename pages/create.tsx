import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import CreateArticleFormComponent from '../components/CreateArticleForm/CreateArticleFormComponent';

export default function RecipePage() {
  return (
    <Fragment>
      <Head>
        <title>
          Create an article
        </title>
      </Head>

      <main className="lg:container mx-auto px-4 mb-20">
        <h1 className="text-4xl my-8">Create</h1>

        <div className="flex flex-col">
          <CreateArticleFormComponent />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
