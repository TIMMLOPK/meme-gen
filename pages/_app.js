import { NextUIProvider, createTheme } from "@nextui-org/react";
import Header from "../component/header";
import "../styles/index.css";
import { SessionProvider } from "next-auth/react";
import Footer from "../component/footer";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}

export default MyApp;
