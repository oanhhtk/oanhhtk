import Header from "@/components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PagesLoading from "@/components/PagesLoading";
import Preload from "@/components/PreLoad";

type MainLayoutType = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutType) {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) setLoading(false);
  }, [router.isReady]);

  return (
    <>
      <div data-scroll-theme className="container-page">
        {loading ? (
          <Preload />
        ) : (
          <>
            <PagesLoading />
            <Header />
            <main className="wrapper">{children}</main>
            <Footer />
          </>
        )}
      </div>
      <div className="cursor"></div>
    </>
  );
}
