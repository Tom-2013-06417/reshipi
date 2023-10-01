import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="flex min-h-[130px] bg-neutral-800 text-white p-4 font-sans">
    <div className="flex justify-evenly items-center container max-w-screen-md mx-auto">
      <div className="flex flex-col gap-1">
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <Link href="/support">support</Link>
      </div>
      <div className="flex flex-col gap-1">
        <Link href="/recipes">recipes</Link>
        <Link href="/articles">articles</Link>
        <Link href="/search">search</Link>
      </div>
    </div>
  </footer>
);
