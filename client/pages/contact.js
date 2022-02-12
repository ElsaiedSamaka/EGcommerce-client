import AddressDetail from "../components/address/AddressDetail";
import ContactForm from "../components/contactform/ContactForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/header/NavBar";
import BreadCumb from "../components/util/BreadCumb";
import InfoRow from "../components/util/InfoRow";


export default function contact() {
    return <>
        <Header />
        <NavBar />
        <div class="contact_map_area">
            <div id="googleMap" style={{ width: '100 %', height: '345px' }}></div>
        </div>
       <InfoRow />
        <BreadCumb />
        <AddressDetail />
        <ContactForm />
        <Footer />
    </>
};