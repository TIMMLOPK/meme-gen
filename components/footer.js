import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <Link href="/" className="flex items-center justify-center">
        <span className="mr-2">©</span>
        <span>{year}</span>
        <span className="ml-2">Meme Generator</span>
      </Link>
    </footer>
  );
}
