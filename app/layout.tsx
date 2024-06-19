import "./global.css";
import Providers from "../components/providers";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meme Generator',
  description: 'A Meme Generator',
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
