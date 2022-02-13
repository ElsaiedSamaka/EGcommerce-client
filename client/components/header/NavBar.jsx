export default function NavBar() {
    return <div className="main_nav">
			<div className="container">
				<div className="row">
					<div className="cc-grid-1 no-padding">
						<div className="nav_left">
							<a href="#">SELECT CATEGORY <i className="fa fa-bars"></i></a>
							<ul className="sub-menu">
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>MODERN Suites</a></li>
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Casual Suites</a></li>
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Classic Suites</a></li>
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Casual Jackets</a></li>
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Cool T-Shirts</a></li>
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>MODERN Suites</a></li>
								<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>CASUAL SHIRTS</a></li>
							</ul>
						</div>
					</div>
					<div className="cc-grid-2 no-padding">
						<div className="nav_middle">
							<ul id="mainmenua_nav">
								<li><a href="shop-listing.html">MEN</a></li>
								<li><a href="shop-listing.html">WOMEN</a>
									<div className="mega-menu">
										<div className="sub-menu-left">
											<h4>MAIN CATEGORY HERE</h4>
											<ul className="dropdown-inner">
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>MODERN Suites</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Casual Suites</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Classic Suites</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Casual Jackets</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Cool T-Shirts</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Fashion Shirts</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>CASUAL SHIRTS</a></li>
											</ul>
										</div>
										<div className="sub-menu-right">
											<img src="images/homepage-dropdowns.jpg" alt="" />
											<div className="d_off">
												<h2>20 <span className="percent">% </span><span>off</span></h2>
											</div>
										</div>
									</div>
								</li>
								<li><a href="shop-listing.html">CHILDREN</a></li>
								<li><a href="#">Pages</a>
									<ul className="sub-menu2">
										<li><a href="shop-listing.html"><i className="fa fa-angle-right"></i>Shop page</a></li>
										<li><a href="shop-listing2.html"><i className="fa fa-angle-right"></i>Shop without sidebar</a></li>
										<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Shop detail page</a></li>
										<li><a href="cart.html"><i className="fa fa-angle-right"></i>Cart page</a></li>
										<li><a href="checkout.html"><i className="fa fa-angle-right"></i>Checkout page</a></li>
										<li><a href="blog.html"><i className="fa fa-angle-right"></i>Blog Page</a></li>
										<li><a href="shortcodes.html"><i className="fa fa-angle-right"></i>Shortcodes Page</a></li>
									</ul>
								</li>
								<li className="last-child"><a href="contact.html">CONTACT</a></li>
							</ul>
						</div>
					</div>
					<div className="cc-grid-3 no-padding">
						<div className="nav_right">
							<a className="home_login" href="">LOGIN</a><span>-OR-</span><a className="home_register" href="">REGISTER</a>
							<div className="dropdown-inner-log">
								<div className="drop_inner_login">
									<p>ALREADY MEMBER ? LOGIN HERE</p>
									<form>
										<div className="inp_log">
											<input type="text" placeholder="Username"/>
											<input type="password" placeholder="Password"/>
										</div>
										<div className="sub_log">
											<input type="submit" value="login"/>
											<div className="forgot_pw">
												<a href=""><i className="fa fa-angle-double-right"></i>Forgot Password</a>
											</div>
										</div>
									</form>
								</div>
								<div className="member_log">
									<p>NOT A MEMBER YET ? <a href="#">REGISTER</a> NOW</p>
								</div>
							</div>
						</div>
					</div>
					
					{/* <!-- MOBILE ONLY CONTENT --> */}
					<div className="only-for-mobile">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<ul className="ofm">
								<li className="m_nav"><i className="fa fa-bars"></i> Woodland</li>
							</ul>

							{/* <!-- MOBILE MENU --> */}
							<div className="mobi-menu">
								<div id='cssmenu'>
									<ul>
										<li className='has-sub'>
											<a href='index.html'><span>Home</span></a>
											<ul className="sub-nav">
												<li><a href="index.html"><span>Home One</span></a></li>
												<li><a href="index1.html"><span>Home Two</span></a></li>
												<li><a href="index2.html"><span>Home Three</span></a></li>
											</ul>
										</li>
										<li className='has-sub'>
											<a href='index.html'><span>SELECT CATEGORY</span></a>
											<ul className="sub-nav">
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
										<li className='has-sub'>
											<a href='category-1.html'><span>WOMEN</span></a>
											<ul>
												<li className='has-sub'>
													<a href='#'><span>MAIN CATEGORY HERE</span></a>
													<ul className="has-sub">
														<li><a href="#"><span>MODERN Suites</span></a></li>
														<li><a href="#"><span>Casual Suites</span></a></li>
														<li><a href="#"><span>Classic Suites</span></a></li>
														<li><a href="#"><span>Casual Jackets</span></a></li>
														<li><a href="#"><span>Cool T-Shirts</span></a></li>
														<li><a href="#"><span>Fashion Shirts</span></a></li>
														<li className="last"><a href="./#"><span>CASUAL SHIRTS</span></a></li>
													</ul>
												</li>
												<li className="img-nav">
													<div className="container">
														<div className="clearfix"></div>
														<div className="space20"></div>
														<div className="clearfix"></div>
														<div className="row in1">
															<div className="col-md-6">
																<a href="#"><img src="images/homepage-dropdowns.jpg" className="img-responsive" alt=""/></a>
															</div>
															<div className="col-md-6">
															</div>
															<div className="clearfix"></div>
															<div className="space20"></div>
															<div className="clearfix"></div>
														</div>
														<div className="clearfix"></div>
														<div className="space20"></div>
														<div className="clearfix"></div>
													</div>
												</li>
											</ul>
										</li>
										<li>
											<a href='category-2.html'><span>CHILDREN</span></a>
										</li>
										<li className='has-sub'>
											<a href='category-1.html'><span>Pages</span></a>
											<ul className="sub-nav">
												<li><a href="shop-listing.html"><i className="fa fa-angle-right"></i>Shop page</a></li>
												<li><a href="shop-listing2.html"><i className="fa fa-angle-right"></i>Shop without sidebar</a></li>
												<li><a href="shop-detail.html"><i className="fa fa-angle-right"></i>Shop detail page</a></li>
												<li><a href="cart.html"><i className="fa fa-angle-right"></i>Cart page</a></li>
												<li><a href="checkout.html"><i className="fa fa-angle-right"></i>Checkout page</a></li>
												<li><a href="blog.html"><i className="fa fa-angle-right"></i>Blog Page</a></li>
												<li><a href="shortcodes.html"><i className="fa fa-angle-right"></i>Shortcodes Page</a></li>
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
