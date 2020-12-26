import Head from 'next/head';
import Hero from '../containers/hero/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Skupos</title>
      </Head>
      <Hero />
    </>
  );
}
