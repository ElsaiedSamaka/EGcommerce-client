import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/header/NavBar";
import Pagination from "../components/pagination/Pagination";
import ShopSlider from "../components/shopslider/ShopSlider";

export default function shoplist() {
    return <>
        <Header />
        <NavBar />
        <ShopSlider />
    	<section class="shop-listing-cc2 blog_area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-12">
								<div class="shop_list shop_list2">
									<div class="showing_result">
										<a href=""><span>SHOWING 1-25 OFF 54 PRODUCTS</span></a>
									</div>	
								</div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12">
								<div class="sorting_right">
									<div class="sort_by">
										<span>SORT BY</span>
									</div>
									<div class="newest-oldest">
										<div class="form-group">
										  <select class="form-control" id="sel1">
											<option>Newest</option>
											<option>Oldest</option>
											<option>Popular</option>
											<option>Best seller</option>
											<option>Upcoming</option>
										  </select>
										</div>
									</div>
								</div>	
							</div>
						</div>
						<div class="row">
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img1 hover_img effect">
										<a href="shop-detail.html"><img src="/images/suite1.jpg" alt="suite1"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal41" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CLASSIC SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal41" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/suite1.jpg" alt="suite1"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CLASSIC SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/suite2.jpg" alt="suite2"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal42" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CORPORATE FITTINGS</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal42" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/suite2.jpg" alt="suite2"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CORPORATE FITTINGS</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/suite3.jpg" alt="suite3"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal43" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal43" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/suite3.jpg" alt="suite3"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/suite1.jpg" alt="suite3"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal44" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal44" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/suite1.jpg" alt="suite3"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
						</div>
						<div class="row">
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite shop_page1">
									<div class="single_suite_img1 hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing1.jpg" alt="suite1"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal45" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal45" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing1.jpg" alt="suite1"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing3.jpg" alt="suite3"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal46" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CORPORATE FITTINGS</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal46" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing3.jpg" alt="suite3"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CORPORATE FITTINGS</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite shop_page3">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing3.jpg" alt="suite3"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal47" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal47" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing3.jpg" alt="suite3"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite shop_page1">
									<div class="single_suite_img1 hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing1.jpg" alt="suite1"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal48" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal48" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing1.jpg" alt="suite1"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
						</div>
						<div class="row">
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img1 hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing4.jpg" alt="suite1"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal49" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal49" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing4.jpg" alt="suite1"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing6.jpg" alt="suite2"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal50" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CORPORATE FITTINGS</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal50" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing6.jpg" alt="suite2"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CORPORATE FITTINGS</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing5.jpg" alt="suite3"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal51" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal51" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="/images/shop-listing5.jpg" alt="suite3"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>BLUE CASUAL SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12">
								<div class="single_suite">
									<div class="single_suite_img1 hover_img effect">
										<a href="shop-detail.html"><img src="/images/shop-listing4.jpg" alt="suite1"/></a>
										<div class="cc_hover">
											<ul class="cc_hover_ul">
												<li class="h_cart"><a class="fa fa-shopping-cart" href="cart.html"></a></li>
												<li class="h_heart"><a class="fa fa-heart" href="#"></a></li>
												<li class="h_search"><a data-toggle="modal" data-target="#myModal52" class="fa fa-search" href=""></a></li>
											</ul>
										</div>
										<div class="common_overlay"></div>
									</div>
									<div class="single_suite_text">
										<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
									</div>
									<div class="single_suite_left">
										<div class="suite_left_del"><del>$17.99</del></div>
										<div class="suite_left_p"><p>$12.99</p></div>
									</div>
									<div class="single_suite_right">
										<ul>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star" href=""></a></li>
											<li><a class="fa fa-star-o" href=""></a></li>
										</ul>
									</div>
								</div>
								
									{/* <!-- Modal --> */}
									<div class="modal fade" id="myModal52" tabindex="-1" role="dialog" aria-hidden="true">
									  <div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-body">
												<div class="m_img_left">
													<a href="shop-detail.html"><img src="//images/shop-listing4.jpg" alt="suite1"/></a>
												</div>
												<div class="p_detail_right">
													<div class="p_slider_box_details">
														<a href="shop-detail.html"><h3>CLASSIS SUITE</h3></a>
														<div class="single_suite_right">
															<ul>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star" href="#"></a></li>
																<li><a class="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div class="pd_color">
														<p>color</p>
														<ul class="s_colors">
															<li><a class="col_1" href="#"></a></li>
															<li><a class="col_2" href="#"></a></li>
															<li><a class="col_3" href="#"></a></li>
															<li><a class="col_4" href="#"></a></li>
															<li><a class="col_5" href="#"></a></li>
														</ul>
													</div>
													<div class="pd_size">
														<p>Size:</p>
														<ul class="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
								
							</div>
						</div>
					</div>
				</div>
			</div>
        </section>
        <Pagination />
        <Footer />
    </>

};
