import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/arnav-css.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Layout/loader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Layout>
      {isLoading && <Loading />}
      <Component {...pageProps} />
    </Layout>
  );
}
