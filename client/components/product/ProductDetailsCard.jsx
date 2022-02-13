export default function ProductDetailsCard() {
    return     <div className="product_detail_area">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 p_page_scroll">
						<div className="product_detail_box">
							<div className="row">
								<div className="col-md-5 col-sm-5 col-xs-cc">
									<div className="single_product_image">
                                        <input type="hidden" name="" id="__VIEWxSTATE" />
						                <ul id='zoom1' className=''>
						                    <li>
						                        {/* <img src="/images/suite1-large.jpg" alt='image1' /> */}
						                    </li>
						                    <li>
						                        {/* <img src="/images/suite2-large.jpg" alt='image2' /> */}
						                    </li>
						                    <li>
						                        {/* <img src="/images/suite3-large.jpg" alt='image3' /> */}
						                    </li>
						                    <li>
						                        {/* <img src="/images/suite1-large.jpg" alt='image1' /> */}
						                    </li>
						                    <li>
						                        {/* <img src="/images/suite2-large.jpg" alt='image2' /> */}
						                    </li>
						                </ul>
                                    </div>
								</div>
								<div className="col-md-7 col-sm-7 col-xs-cc2">
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
												<p>DELIVERY ESTIMATION</p>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
										</div>
										<div className="pd_color">
											<p>Select color</p>
											<ul className="s_colors">
												<li><a className="col_1" href="#"></a></li>
												<li><a className="col_2" href="#"></a></li>
												<li><a className="col_3" href="#"></a></li>
												<li><a className="col_4" href="#"></a></li>
												<li><a className="col_5" href="#"></a></li>
											</ul>
										</div>
										<div className="pd_size">
											<p>Select Size</p>
											<ul className="s_size">
												<li><a href="#">S</a></li>
												<li><a href="#">M</a></li>
												<li><a href="#">L</a></li>
												<li><a href="#">XL</a></li>
												<li><a href="#">XXL</a></li>
											</ul>
											<a href="#" className="size_guide">Size Guide</a>
										</div>
									</div>
									<div className="pd_quantity">
										<div className="pdq_left">
											<p>Select Quantity</p>
											<form id='myform' method='POST' action='#'>
												<input type='text' name='quantity' value='1' className='qty' />
												<input type='button' value='+' className='qtyplus'/>
												<input type='button' value='-' className='qtyminus'/>
											</form>
											<div className="in_stock">
												<a >In stock</a>
											</div>
										</div>
										<div className="pdq_right">
											<a href="#" className="add_w"><i className="fa fa-heart"></i> ADD TO WISHLIST</a>
										</div>
									</div>
									<div className="pd_total">
										<div className="pdq_left">
											<p>TOTAL PRICE</p>
											<span>$139.99</span>
										</div>
										<div className="pdq_right">
											<a href="#" className="add_cart"> ADD TO Cart</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
};
