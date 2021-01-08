import Head from "next/head";
import React from "react";

export default function SEO({ title }) {
  return (
    <>
      <Head>
        <title>Echo Plus | {title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
    </>
  );
}
