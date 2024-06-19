import { Generator } from "../components/generator";

async function getMemes() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();

  const { memes } = data.data;
  return memes;
}

export default async function Home() {
  const memes = await getMemes();
  return (
    <main className="w-full h-full">
      <Generator memes={memes} />
    </main>
  );
}
