import Head from "next/head";
import Header from "../components/header/Header";
import NavBar from "../components/header/NavBar";

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

      </body>
    </div>
  );
}
