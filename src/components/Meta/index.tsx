/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// import { isEnvDev } from '@/utils/constants';
import Head from "next/head";
import Script from "next/script";

const Meta = () => {
  return (
    <Head>
      <title>Oanh Huynh — oanhhtk Portfolio</title>
      <meta name="title" content="Oanh Huynh  — oanhhtk Portfolio" />
      <meta
        name="description"
        content="Frontend Developer
Working motto: Responsible, like to challenge and be flexible.
My objective: be more fluency in frontend web development using many"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oanhhtk.vercal.app/" />
      <meta property="og:title" content="Oanh Huynh  — oanhhtk Portfolio" />
      <meta
        property="og:description"
        content="Frontend Developer
Working motto: Responsible, like to challenge and be flexible.
My objective: be more fluency in frontend web development using many"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dcsxedwqd/image/upload/v1686585682/Screen_Shot_2023-06-12_at_23.01.09_h8v826.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://oanhhtk.vercal.app/" />
      <meta
        property="twitter:title"
        content="Oanh Huynh  — oanhhtk Portfolio"
      />
      <meta
        property="twitter:description"
        content="Frontend Developer
Working motto: Responsible, like to challenge and be flexible.
My objective: be more fluency in frontend web development using many"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dcsxedwqd/image/upload/v1686585682/Screen_Shot_2023-06-12_at_23.01.09_h8v826.png"
      />
    </Head>
  );
};

export default Meta;
