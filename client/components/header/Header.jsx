export default function Header() {
    return <div class="header_top_area">
			<div class="container">
				<div class="row">
					<div class="col-md-3 col-sm-3 col-xs-12">
						<div class="logo">
							<a href="index.html"><img src="/images/logo.png" alt="logo" /></a>
						</div>
						<div class="devider">
							<img src="/images/devider.png" alt="devider" />
						</div>
					</div>
					<div class="col-md-4 col-sm-3 col-xs-12">
						<div class="header_search">
							<input type="text" placeholder="Search"/>
							<i class="fa fa-search"></i>
						</div>
					</div>
					<div class="col-md-5 col-sm-6 col-xs-12">
						<div class="header_social">
							<ul id="head_social">
								<li><a class="fa fa-facebook" href=""></a></li>
								<li><a class="fa fa-twitter" href=""></a></li>
								<li><a class="fa fa-google-plus" href=""></a></li>
							</ul>
						</div>
						<div class="header_currency">
							<ul id="head_currency">
								<li><a href="">usd <i class="fa fa-chevron-down"></i></a>
									<ul id="currency_dropdown">
										<li><a href="">eur</a></li>
										<li><a href="">dzd</a></li>
										<li><a href="">amd</a></li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="header_cart">
							<div class="head_cart_img">
								<img src="/images/hd_cart.png" alt="" />
							</div>
							<div class="head_cart_text">
								<div class="head_cart_text_top">
									<a href="cart.html"><p>SHOPPING CART (3)</p></a>
								</div>
								<div class="head_cart_text_bottom">
									<a href="checkout.html"><p>CHECKOUT</p></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
};
