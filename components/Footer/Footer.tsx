import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bottom-0 h-15 w-full bg-gray-200 p-4">
      <span className="mr-1">Powered by</span>
      <a
        className="flex"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  );
}
