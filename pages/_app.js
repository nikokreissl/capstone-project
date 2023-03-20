import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { givenCompetitions } from "../data/competition";

export default function App({ Component, pageProps }) {
  const [competitions, setCompetition] = useState(givenCompetitions);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
