import Header from "../components/header";
import "../styles/global.css";
import Footer from "../components/footer";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default MyApp;
