import { useRouter } from "next/router";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname.includes("/admin")) {
  //     document.querySelector("html,body").style.backgroundColor = "white";
  //   }
  // }, [router.pathname]);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
