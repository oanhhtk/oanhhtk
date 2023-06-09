import "@/styles/globals.css";
import Aos from "aos";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Meta from "@/components/Meta";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Meta />
      <Component {...pageProps} />;
    </>
  );
}
