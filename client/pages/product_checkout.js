import CheckoutForm from "../components/checkoutForm/CheckoutForm";
import Layout from "../components/util/Layout";

export default function product_checkout() {
    return <Layout>
       <div class="cart_slider_area">
			<div class="container">
				<div class="row">
					<div class="col-md-5 col-sm-5 col-xs-12">
						<div class="cart_heading">
							<h2 class="breadcumb_head">Checkout</h2>
							<p>COOLEST COLLECTION OF THE SEASON IS ON</p>
							<div class="breadcumb_box">
								<ul class="breadcumb_menu">
									<li><a href="">shop</a></li>
									<li class="active"><a href="">Checkout</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
        <CheckoutForm />
    </Layout>
    
};
