"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }) {
  return (
    <NextThemesProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
