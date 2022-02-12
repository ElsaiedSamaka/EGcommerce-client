import Head from "next/head";
import LatestBlogs from "../components/blog/LatestBlogs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/header/NavBar";
import HomeSlider from "../components/home_slider/HomeSlider";
import FeaturedProducts from "../components/home_suite/FeaturedProducts";
import LatestProducts from "../components/home_suite/LatestProducts";
import Partners from "../components/partners/Partners";
import Testimonial from "../components/testimonial/Testimonial";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <body>
	  	<Header />
	  	<NavBar />
      <HomeSlider />
        <FeaturedProducts />

        <LatestProducts />
        <Testimonial />
        <LatestBlogs />
        <Partners />
        <Footer />
      </body>
    </div>
  );
}
