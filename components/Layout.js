import { Playfair_Display } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import Head from "next/head";

const playfairFont = Playfair_Display({ subsets: ["latin"] });

const source_Code_Pro = Source_Code_Pro({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bench and Sofa</title>
        <meta name="description" content="Bench and Sofa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="topBand">
        <p className={`bigTitle ${playfairFont.className}`}>BENCH &amp; SOFA</p>
      </div>

      {children}

      <div className={`footer ${source_Code_Pro.className}`}>
        <hr />
        <p>Copyrights (C) 2023 Bench & Sofa, Inc. All Rights Reserved.</p>
      </div>
    </>
  );
}
