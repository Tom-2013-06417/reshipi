'use client';

import { RecipeComponent } from '../Recipe/Recipe';
import { Article, User } from '../../generated/payload-types';
import { RichText } from '../RichText/RichText';
import { Node } from '../RichText/types';
import { AnimatedLayout } from '../Layout/AnimatedLayout';

export const dynamicParams = false;

interface Props {
  readonly article: Article;
}

export default function ArticleComponent({ article }: Props) {
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
    <AnimatedLayout>
      <main className="container max-w-screen-md mx-auto px-4 font-thin min-h-screen overflow-hidden">
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
    </AnimatedLayout>
  );
}
