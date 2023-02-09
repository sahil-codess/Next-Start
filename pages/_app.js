import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import layout from "../styles/layout.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Sahilkhan Ahmadzai</title>
        <meta name="description" content="About Page for Next Start" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
