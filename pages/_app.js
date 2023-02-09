import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <SessionProvider>
        <Head>
          <title>Sahilkhan Ahmadzai</title>
          <meta name="description" content="About Page for Next Start" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
