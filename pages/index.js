import Head from "next/head";
import Sections from "./sections";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>NFTERS</title>
        <meta name="description" content="NFTERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sections />
      </main>

      <footer></footer>
    </div>
  );
}
