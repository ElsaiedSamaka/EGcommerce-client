import Head from "next/head";
import LatestBlogs from "../components/blog/LatestBlogs";
import HomeSlider from "../components/home_slider/HomeSlider";
import FeaturedProducts from "../components/home_suite/FeaturedProducts";
import LatestProducts from "../components/home_suite/LatestProducts";
import Partners from "../components/partners/Partners";
import Testimonial from "../components/testimonial/Testimonial";
import Layout from "../components/util/Layout";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Egycommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Layout>
          <HomeSlider />
          <FeaturedProducts products={products} />

          <LatestProducts />
          <Testimonial />
          <LatestBlogs />
          <Partners />
        </Layout>
      </body>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}