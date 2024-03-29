'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../Card/Card';
import { Article } from '../../generated/payload-types';
import { CMS_API } from '../../config';
import { AnimatedLayout } from '../Layout/AnimatedLayout';
import LogoComponent from '../../assets/icons/Logo';

interface Props {
  readonly articles: Article[];
}

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${CMS_API}/articles`);
  const articles = await response.json();

  return articles.docs;
}

export default function Home({ articles }: Props) {
  const cards = articles?.map(article => {
    if (article === null) {
      return <Fragment key={0}></Fragment>;
    }

    return (
      <motion.div
        key={article.id}
        whileHover={{ scale: 1.01 }}
        transition={{ ease: 'easeOut', duration: 0.1 }}
      >
        <Card
          heading={article.title}
          body={''}
          link={article.seo_url}
          thumbnail={article.seo_thumbnail}
        />
      </motion.div>
    );
  });

  return (
    <AnimatedLayout>
      <main className="container max-w-screen-md mx-auto px-4 min-h-screen overflow-hidden">
        <div className="min-h-[45vh]"></div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Link
            className="flex flex-col lg:flex-row items-center mb-20 lg:justify-center"
            href="/"
          >
            <div className="w-24 h-24 mr-2">
              <LogoComponent />
            </div>
            <h1 className="font-sans font-bold text-6xl text-center">
              reshipi
            </h1>
          </Link>
        </motion.div>

        <div className="flex flex-col mb-10">{cards}</div>
      </main>
    </AnimatedLayout>
  );
}
