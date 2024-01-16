import '../styles/globals.css';
import { AppProps } from 'next/app';
import { AnimatedLayout } from '../components/Layout/AnimatedLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-hidden">
      <AnimatedLayout>
        <Component {...pageProps} />
      </AnimatedLayout>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
