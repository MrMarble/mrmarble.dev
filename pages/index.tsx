import Head from "next/head";
import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { DarkToggle } from "../components/DarkToggle/DarkToggle";
import { Heading } from "../components/Heading/Heading";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Head>
        <title>MrMarble</title>
        <meta name="description" content="MrMarble Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DarkToggle size="2rem" className="absolute right-5 top-5" />

      <section className="container mx-auto h-screen ">
        <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Heading>Alvaro Tinoco</Heading>
          <Heading size={4} className="mb-5">
            Senior Full-Stack Developer
          </Heading>
          <a
            href="mailto:atinoco@protonmail.com"
            className="text-5xl inline-block mr-2 mt-5"
          >
            <FaEnvelope title="Email" />
          </a>
          <a
            href="https://github.com/mrmarble"
            className="text-5xl inline-block mr-2"
          >
            <FaGithub title="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/alvaro-tinoco-marmol/"
            className="text-5xl inline-block mr-2"
          >
            <FaLinkedin title="Linkdein" />
          </a>
        </article>
      </section>
    </main>
  );
}
