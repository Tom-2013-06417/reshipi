import '../styles/globals.css';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
