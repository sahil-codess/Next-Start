import Footer from "@/components/Footer";
import Head from "next/head";

const about = () => {
  return (
    <>
    <Head>
      <title>Sahilkhan Ahmadzai</title>
      <meta name="description" content="About Page for Next Start" />
    </Head>
      <div className="content">
        <h2>About</h2>
      </div>
    </>
  );
};

export default about;

about.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
