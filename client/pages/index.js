import Head from "next/head";
import Header from "../components/header/Header";
import NavBar from "../components/header/NavBar";
import HomeSlider from "../components/home_slider/HomeSlider";
import FeaturedProducts from "../components/home_suite/FeaturedProducts";
import LatestProducts from "../components/home_suite/LatestProducts";

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
      </body>
    </div>
  );
}
