import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

type routeState = {
  isRouteChanging: boolean;
  loadingKey: number;
};

export default function PagesLoading() {
  const router = useRouter();
  const [state, setState] = useState<routeState>({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState: any) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>{state.isRouteChanging && <TopBarProgress key={state.loadingKey} />}</>
  );
}
