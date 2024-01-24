import '../styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <body>{children}</body>
      <GoogleAnalytics gaId="G-VZ3H3L3V6T" />
    </html>
  );
}
