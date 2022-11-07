import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import Layout from "../../components/util/Layout";

export default function Checkout() {
  return (
    <Layout>
      <div className="cart_slider_area">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <div className="cart_heading">
                <h2 className="breadcumb_head">Checkout</h2>
                <p>COOLEST COLLECTION OF THE SEASON IS ON</p>
                <div className="breadcumb_box">
                  <ul className="breadcumb_menu">
                    <li>
                      <a>shop</a>
                    </li>
                    <li className="active">
                      <a>Checkout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutForm />
    </Layout>
  );
}
