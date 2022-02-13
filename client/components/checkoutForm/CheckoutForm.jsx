export default function CheckoutForm() {
    return 		<section className="checkout_main_area">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-8 col-xs-12">
						<div className="checkout_box">
							<div className="billing_detail_heading">
								<h4>Billing Detail</h4>
							</div>
							<form role="form">
								<div className="country_select">
									<div className="form-group">
									  <label for="sel1">Country</label>
									  <select className="form-control" id="sel1">
										<option>UK (United Kingdom)</option>
										<option>USA</option>
										<option>EU</option>
										<option>Australia</option>
										<option>Canada</option>
									  </select>
									</div>
								</div>
								<div className="checkout_double_form">
									<div className="checkout_double_left">
										<label>First Name</label>
										<input type="text" />
									</div>
									<div className="checkout_double_right">
										<label>Last Name</label>
										<input type="text" />
									</div>
								</div>
								<div className="checkout_single_form">
									<label>Company Name</label>
									<input type="text" />
								</div>
								<div className="checkout_single_form">
									<label>Address line 1</label>
									<input type="text" />
								</div>
								<div className="checkout_single_form">
									<label>Address line 2</label>
									<input type="text" />
								</div>
								<div className="checkout_single_form">
									<label>Town/city</label>
									<input type="text" />
								</div>
								<div className="checkout_double_form">
									<div className="checkout_double_left">
										<label>Country</label>
										<input type="text" />
									</div>
									<div className="checkout_double_right">
										<label>Post code</label>
										<input type="text" />
									</div>
								</div>
								<div className="checkout_double_form">
									<div className="checkout_double_left">
										<label>Phone number</label>
										<input type="text" />
									</div>
									<div className="checkout_double_right">
										<label>Email Address</label>
										<input type="text" />
									</div>
								</div>
								<div className="single_checkout_radio single_checkout_radio2">
									<div className="radio">
									  <label><input type="radio" name="optradio"/>Direct Bank Transfer</label>
									  <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
									</div>
								</div>
								<div className="single_checkout_radio">
									<div className="radio">
									  <label><input type="radio" name="optradio"/>Cheque Payment</label>
									</div>
								</div>
								<div className="single_checkout_radio">
									<div className="radio paypal_c">
									  <label><input type="radio" name="optradio"/>paypal</label>
									  <a href="#"><img src="images/checkout-Recovered.png" alt="" /></a>
									</div>
								</div>
								<div className="checkout_double_form">
									<div className="checkout_double_left">
										<label>ENTER YOUR PAYPAL EMAIL</label>
										<input type="text" />
									</div>
									<div className="checkout_double_right">
										<label>CONFIRM YOUR PAYPAL EMAIL</label>
										<input type="text" />
									</div>
								</div>
								<div className="checkout_single_submit">
									<input type="submit" value="PLACE YOUR ORDER"/>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12">
						<div className="checkout_right">
							<div className="order_info_up">
								<h4>YOUR ORDER INFORMATION</h4>
								<div className="c_single_item">
									<p>YELLOW COLOR SUITE</p>
									<span>$102.00</span>
								</div>
								<div className="c_single_item">
									<p>CART SUBTOTAL </p>
									<span>$192.00</span>
								</div>
								<div className="c_single_item last-c-item">
									<p>SHIPPING & HANDLING</p>
									<span>FREE</span>
								</div>
								
								<div className="c_total_item">
									<p>Cart Total</p>
									<span>$294.00</span>
								</div>
							</div>
							<div className="order_info_bottom">
								<div className="checkbox checkbox-success checkbox-inline">
									<label for="inlineCheckbox2">SHIP TO DIFFERENT ADDRESS</label>
									<input type="checkbox" checked="" value="option1" id="inlineCheckbox2"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
};
