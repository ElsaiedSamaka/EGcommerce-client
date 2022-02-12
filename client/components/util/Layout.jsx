import Footer from "../footer/Footer";
import Header from "../header/Header";
import NavBar from "../header/NavBar";

export default function Layout({children}) {
    return <>
        <Header />
        <NavBar />
        {children}
        <Footer />
    </>
};
