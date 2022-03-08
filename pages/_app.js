import { NextUIProvider } from '@nextui-org/react';
import Header from '../component/header';
import '../styles/index.css';
import { SessionProvider } from "next-auth/react"
import Footer from '../component/footer';

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;