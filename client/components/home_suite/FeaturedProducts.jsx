export default function FeaturedProducts() {
    return 	<section className="suite_one_area">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="sunglasses">
							<h2>FEATURED PRODUCTS</h2>
							<div className="sun_span">
							<span>COOLEST COLLECTION OF THE SEASON</span>
							</div>
							<div className="sun_line"></div>
						</div>
						<div className="row">
							<div className="col-md-3 col-sm-3 col-xs-12">
								<div className="single_suite">
									<div className="single_suite_img1 hover_img effect">
										<a href="product_detail"><img src="/images/suite1.jpg" alt="" /></a>
										<div className="cc_hover">
											<ul className="cc_hover_ul">
												<li className="h_cart"><a className="fa fa-shopping-cart" href="product_checkout"></a></li>
												<li className="h_heart"><a className="fa fa-heart" href="#"></a></li>
												<li className="h_search"><a data-toggle="modal" data-target="#myModal21" className="fa fa-search" ></a></li>
											</ul>
										</div>
										<div className="common_overlay"></div>
									</div>
									<div className="single_suite_text">
										<a href="product_detail"><h3>CLASSIS SUITE</h3></a>
									</div>
									<div className="single_suite_left">
										<div className="suite_left_del"><del>$17.99</del></div>
										<div className="suite_left_p"><p>$12.99</p></div>
									</div>
									<div className="single_suite_right">
										<ul>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star-o" ></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div className="modal fade" id="myModal21" tabindex="-1" role="dialog" aria-hidden="true">
									  <div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-body">
												<div className="m_img_left">
													<a href="product_detail"><img src="/images/suite1.jpg" alt="" /></a>
												</div>
												<div className="p_detail_right">
													<div className="p_slider_box_details">
														<a href="product_detail"><h3>GRAY COLOR CORPORATE SUITE</h3></a>
														<div className="single_suite_right">
															<ul>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div className="pd_color">
														<p>color</p>
														<ul className="s_colors">
															<li><a className="col_1" href="#"></a></li>
															<li><a className="col_2" href="#"></a></li>
															<li><a className="col_3" href="#"></a></li>
															<li><a className="col_4" href="#"></a></li>
															<li><a className="col_5" href="#"></a></li>
														</ul>
													</div>
													<div className="pd_size">
														<p>Size:</p>
														<ul className="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
							</div>
							<div className="col-md-3 col-sm-3 col-xs-12">
								<div className="single_suite">
									<div className="single_suite_img hover_img effect">
										<a href="product_detail"><img src="images/suite2.jpg" alt="" /></a>
										<div className="cc_hover">
											<ul className="cc_hover_ul">
												<li className="h_cart"><a className="fa fa-shopping-cart" href="product_checkout"></a></li>
												<li className="h_heart"><a className="fa fa-heart" href="#"></a></li>
												<li className="h_search"><a data-toggle="modal" data-target="#myModal22" className="fa fa-search" ></a></li>
											</ul>
										</div>
										<div className="common_overlay"></div>
									</div>
									<div className="single_suite_text">
										<a href="product_detail"><h3>CORPORATE FITTINGS</h3></a>
									</div>
									<div className="single_suite_left">
										<div className="suite_left_del"><del>$17.99</del></div>
										<div className="suite_left_p"><p>$12.99</p></div>
									</div>
									<div className="single_suite_right">
										<ul>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star-o" ></a></li>
										</ul>
									</div>
								</div>
								{/* <!-- Modal --> */}
									<div className="modal fade" id="myModal22" tabindex="-1" role="dialog" aria-hidden="true">
									  <div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-body">
												<div className="m_img_left">
													<a href="product_detail"><img src="images/suite2.jpg" alt="" /></a>
												</div>
												<div className="p_detail_right">
													<div className="p_slider_box_details">
														<a href="product_detail"><h3>GRAY COLOR CORPORATE SUITE</h3></a>
														<div className="single_suite_right">
															<ul>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div className="pd_color">
														<p>color</p>
														<ul className="s_colors">
															<li><a className="col_1" href="#"></a></li>
															<li><a className="col_2" href="#"></a></li>
															<li><a className="col_3" href="#"></a></li>
															<li><a className="col_4" href="#"></a></li>
															<li><a className="col_5" href="#"></a></li>
														</ul>
													</div>
													<div className="pd_size">
														<p>Size:</p>
														<ul className="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
							</div>
							<div className="col-md-3 col-sm-3 col-xs-12">
								<div className="single_suite">
									<div className="single_suite_img hover_img effect">
										<a href="product_detail"><img src="images/suite3.jpg" alt="" /></a>
										<div className="cc_hover">
											<ul className="cc_hover_ul">
												<li className="h_cart"><a className="fa fa-shopping-cart" href="product_checkout"></a></li>
												<li className="h_heart"><a className="fa fa-heart" href="#"></a></li>
												<li className="h_search"><a data-toggle="modal" data-target="#myModal23" className="fa fa-search" ></a></li>
											</ul>
										</div>
										<div className="common_overlay"></div>
									</div>
									<div className="single_suite_text">
										<a href="product_detail"><h3>BLUE CASUAL SUITE</h3></a>
									</div>
									<div className="single_suite_left">
										<div className="suite_left_del"><del>$17.99</del></div>
										<div className="suite_left_p"><p>$12.99</p></div>
									</div>
									<div className="single_suite_right">
										<ul>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star-o" ></a></li>
										</ul>
									</div>
								</div>
								
								{/* <!-- Modal --> */}
									<div className="modal fade" id="myModal23" tabindex="-1" role="dialog" aria-hidden="true">
									  <div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-body">
												<div className="m_img_left">
													<a href="product_detail"><img src="images/suite3.jpg" alt="" /></a>
												</div>
												<div className="p_detail_right">
													<div className="p_slider_box_details">
														<a href="product_detail"><h3>GRAY COLOR CORPORATE SUITE</h3></a>
														<div className="single_suite_right">
															<ul>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div className="pd_color">
														<p>color</p>
														<ul className="s_colors">
															<li><a className="col_1" href="#"></a></li>
															<li><a className="col_2" href="#"></a></li>
															<li><a className="col_3" href="#"></a></li>
															<li><a className="col_4" href="#"></a></li>
															<li><a className="col_5" href="#"></a></li>
														</ul>
													</div>
													<div className="pd_size">
														<p>Size:</p>
														<ul className="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									  </div>
									</div>
									{/* <!-- Modal END --> */}
							</div>
							<div className="col-md-3 col-sm-3 col-xs-12">
								<div className="single_suite">
									<div className="single_suite_img hover_img effect">
										<a href="product_detail"><img src="images/suite4.jpg" alt="" /></a>
										<div className="cc_hover">
											<ul className="cc_hover_ul">
												<li className="h_cart"><a className="fa fa-shopping-cart" href="product_checkout"></a></li>
												<li className="h_heart"><a className="fa fa-heart" href="#"></a></li>
												<li className="h_search"><a data-toggle="modal" data-target="#myModal24" className="fa fa-search" ></a></li>
											</ul>
										</div>
										<div className="common_overlay"></div>
									</div>
									<div className="single_suite_text">
										<a href="product_detail"><h3>CLASSIS SUITE</h3></a>
									</div>
									<div className="single_suite_left">
										<div className="suite_left_del"><del>$17.99</del></div>
										<div className="suite_left_p"><p>$12.99</p></div>
									</div>
									<div className="single_suite_right">
										<ul>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star" ></a></li>
											<li><a className="fa fa-star-o" ></a></li>
										</ul>
									</div>
								</div>
								{/* <!-- Modal --> */}
									<div className="modal fade" id="myModal24" tabindex="-1" role="dialog" aria-hidden="true">
									  <div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-body">
												<div className="m_img_left">
													<a href="product_detail"><img src="images/suite4.jpg" alt="" /></a>
												</div>
												<div className="p_detail_right">
													<div className="p_slider_box_details">
														<a href="product_detail"><h3>GRAY COLOR CORPORATE SUITE</h3></a>
														<div className="single_suite_right">
															<ul>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star" href="#"></a></li>
																<li><a className="fa fa-star-o" href="#"></a></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
													</div>
													<div className="pd_color">
														<p>color</p>
														<ul className="s_colors">
															<li><a className="col_1" href="#"></a></li>
															<li><a className="col_2" href="#"></a></li>
															<li><a className="col_3" href="#"></a></li>
															<li><a className="col_4" href="#"></a></li>
															<li><a className="col_5" href="#"></a></li>
														</ul>
													</div>
													<div className="pd_size">
														<p>Size:</p>
														<ul className="s_size">
															<li><a href="#">S</a></li>
															<li><a href="#">M</a></li>
															<li><a href="#">L</a></li>
															<li><a href="#">XL</a></li>
															<li><a href="#">XXL</a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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
};
