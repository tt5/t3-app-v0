import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/login";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello</h1>
        <Login />
      </main>
    </>
  );
};

export default Home;
