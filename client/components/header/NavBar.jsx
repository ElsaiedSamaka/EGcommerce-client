export default function NavBar() {
    return <div class="main_nav">
			<div class="container">
				<div class="row">
					<div class="cc-grid-1 no-padding">
						<div class="nav_left">
							<a href="#">SELECT CATEGORY <i class="fa fa-bars"></i></a>
							<ul class="sub-menu">
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>MODERN Suites</a></li>
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Casual Suites</a></li>
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Classic Suites</a></li>
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Casual Jackets</a></li>
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Cool T-Shirts</a></li>
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>MODERN Suites</a></li>
								<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>CASUAL SHIRTS</a></li>
							</ul>
						</div>
					</div>
					<div class="cc-grid-2 no-padding">
						<div class="nav_middle">
							<ul id="mainmenua_nav">
								<li><a href="shop-listing.html">MEN</a></li>
								<li><a href="shop-listing.html">WOMEN</a>
									<div class="mega-menu">
										<div class="sub-menu-left">
											<h4>MAIN CATEGORY HERE</h4>
											<ul class="dropdown-inner">
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>MODERN Suites</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Casual Suites</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Classic Suites</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Casual Jackets</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Cool T-Shirts</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Fashion Shirts</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>CASUAL SHIRTS</a></li>
											</ul>
										</div>
										<div class="sub-menu-right">
											<img src="images/homepage-dropdowns.jpg" alt="" />
											<div class="d_off">
												<h2>20 <span class="percent">% </span><span>off</span></h2>
											</div>
										</div>
									</div>
								</li>
								<li><a href="shop-listing.html">CHILDREN</a></li>
								<li><a href="#">Pages</a>
									<ul class="sub-menu2">
										<li><a href="shop-listing.html"><i class="fa fa-angle-right"></i>Shop page</a></li>
										<li><a href="shop-listing2.html"><i class="fa fa-angle-right"></i>Shop without sidebar</a></li>
										<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Shop detail page</a></li>
										<li><a href="cart.html"><i class="fa fa-angle-right"></i>Cart page</a></li>
										<li><a href="checkout.html"><i class="fa fa-angle-right"></i>Checkout page</a></li>
										<li><a href="blog.html"><i class="fa fa-angle-right"></i>Blog Page</a></li>
										<li><a href="shortcodes.html"><i class="fa fa-angle-right"></i>Shortcodes Page</a></li>
									</ul>
								</li>
								<li class="last-child"><a href="contact.html">CONTACT</a></li>
							</ul>
						</div>
					</div>
					<div class="cc-grid-3 no-padding">
						<div class="nav_right">
							<a class="home_login" href="">LOGIN</a><span>-OR-</span><a class="home_register" href="">REGISTER</a>
							<div class="dropdown-inner-log">
								<div class="drop_inner_login">
									<p>ALREADY MEMBER ? LOGIN HERE</p>
									<form>
										<div class="inp_log">
											<input type="text" placeholder="Username"/>
											<input type="password" placeholder="Password"/>
										</div>
										<div class="sub_log">
											<input type="submit" value="login"/>
											<div class="forgot_pw">
												<a href=""><i class="fa fa-angle-double-right"></i>Forgot Password</a>
											</div>
										</div>
									</form>
								</div>
								<div class="member_log">
									<p>NOT A MEMBER YET ? <a href="#">REGISTER</a> NOW</p>
								</div>
							</div>
						</div>
					</div>
					
					{/* <!-- MOBILE ONLY CONTENT --> */}
					<div class="only-for-mobile">
						<div class="col-md-12 col-sm-12 col-xs-12">
							<ul class="ofm">
								<li class="m_nav"><i class="fa fa-bars"></i> Woodland</li>
							</ul>

							{/* <!-- MOBILE MENU --> */}
							<div class="mobi-menu">
								<div id='cssmenu'>
									<ul>
										<li class='has-sub'>
											<a href='index.html'><span>Home</span></a>
											<ul class="sub-nav">
												<li><a href="index.html"><span>Home One</span></a></li>
												<li><a href="index1.html"><span>Home Two</span></a></li>
												<li><a href="index2.html"><span>Home Three</span></a></li>
											</ul>
										</li>
										<li class='has-sub'>
											<a href='index.html'><span>SELECT CATEGORY</span></a>
											<ul class="sub-nav">
												<li><a href="#"><span>MODERN Suites</span></a></li>
												<li><a href="#"><span>Casual Suites</span></a></li>
												<li><a href="#"><span>Classic Suite</span></a></li>
												<li><a href="#"><span>Casual Jacket</span></a></li>
												<li><a href="#"><span>Cool T-Shirts</span></a></li>
												<li><a href="#"><span>MODERN Suites</span></a></li>
												<li><a href="#"><span>CASUAL SHIRTS</span></a></li>
											</ul>
										</li>
										<li>
											<a href='blog.html'><span>Men</span></a>
										</li>
										<li class='has-sub'>
											<a href='category-1.html'><span>WOMEN</span></a>
											<ul>
												<li class='has-sub'>
													<a href='#'><span>MAIN CATEGORY HERE</span></a>
													<ul class="has-sub">
														<li><a href="#"><span>MODERN Suites</span></a></li>
														<li><a href="#"><span>Casual Suites</span></a></li>
														<li><a href="#"><span>Classic Suites</span></a></li>
														<li><a href="#"><span>Casual Jackets</span></a></li>
														<li><a href="#"><span>Cool T-Shirts</span></a></li>
														<li><a href="#"><span>Fashion Shirts</span></a></li>
														<li class="last"><a href="./#"><span>CASUAL SHIRTS</span></a></li>
													</ul>
												</li>
												<li class="img-nav">
													<div class="container">
														<div class="clearfix"></div>
														<div class="space20"></div>
														<div class="clearfix"></div>
														<div class="row in1">
															<div class="col-md-6">
																<a href="#"><img src="images/homepage-dropdowns.jpg" class="img-responsive" alt=""/></a>
															</div>
															<div class="col-md-6">
															</div>
															<div class="clearfix"></div>
															<div class="space20"></div>
															<div class="clearfix"></div>
														</div>
														<div class="clearfix"></div>
														<div class="space20"></div>
														<div class="clearfix"></div>
													</div>
												</li>
											</ul>
										</li>
										<li>
											<a href='category-2.html'><span>CHILDREN</span></a>
										</li>
										<li class='has-sub'>
											<a href='category-1.html'><span>Pages</span></a>
											<ul class="sub-nav">
												<li><a href="shop-listing.html"><i class="fa fa-angle-right"></i>Shop page</a></li>
												<li><a href="shop-listing2.html"><i class="fa fa-angle-right"></i>Shop without sidebar</a></li>
												<li><a href="shop-detail.html"><i class="fa fa-angle-right"></i>Shop detail page</a></li>
												<li><a href="cart.html"><i class="fa fa-angle-right"></i>Cart page</a></li>
												<li><a href="checkout.html"><i class="fa fa-angle-right"></i>Checkout page</a></li>
												<li><a href="blog.html"><i class="fa fa-angle-right"></i>Blog Page</a></li>
												<li><a href="shortcodes.html"><i class="fa fa-angle-right"></i>Shortcodes Page</a></li>
											</ul>
										</li>
										<li>
											<a href='contact.html'><span>CONTACT</span></a>
										</li>
										<li>
											<a href='cart.html'><span>LOGIN HERE</span></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <!-- MOBILE ONLY CONTENT --> */}
					</div>
					
				</div>
			</div>
		</div>
};
