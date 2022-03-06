import { NextUIProvider } from '@nextui-org/react';
import Header from '../component/header';
import '../styles/index.css';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;