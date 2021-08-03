import Head from "next/head";

import { DarkToggle } from "../components/DarkToggle/DarkToggle";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Head>
        <title>MrMarble</title>
        <meta name="description" content="MrMarble Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DarkToggle size="2rem" className="absolute right-5 top-5" />
    </main>
  );
}
