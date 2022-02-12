export default function ProductDetailsCard() {
    return     <div class="product_detail_area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12 p_page_scroll">
						<div class="product_detail_box">
							<div class="row">
								<div class="col-md-5 col-sm-5 col-xs-cc">
									<div class="single_product_image">
                                        <input type="hidden" name="" id="__VIEWxSTATE" />
						                <ul id='zoom1' class=''>
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
								<div class="col-md-7 col-sm-7 col-xs-cc2">
									<div class="p_detail_right">
										<div class="p_slider_box_details">
											<a href="shop-detail.html"><h3>GRAY COLOR CORPORATE SUITE</h3></a>
											<div class="single_suite_right">
												<ul>
													<li><a class="fa fa-star" href="#"></a></li>
													<li><a class="fa fa-star" href="#"></a></li>
													<li><a class="fa fa-star" href="#"></a></li>
													<li><a class="fa fa-star" href="#"></a></li>
													<li><a class="fa fa-star-o" href="#"></a></li>
												</ul>
												<p>DELIVERY ESTIMATION</p>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula.</p>
										</div>
										<div class="pd_color">
											<p>Select color</p>
											<ul class="s_colors">
												<li><a class="col_1" href="#"></a></li>
												<li><a class="col_2" href="#"></a></li>
												<li><a class="col_3" href="#"></a></li>
												<li><a class="col_4" href="#"></a></li>
												<li><a class="col_5" href="#"></a></li>
											</ul>
										</div>
										<div class="pd_size">
											<p>Select Size</p>
											<ul class="s_size">
												<li><a href="#">S</a></li>
												<li><a href="#">M</a></li>
												<li><a href="#">L</a></li>
												<li><a href="#">XL</a></li>
												<li><a href="#">XXL</a></li>
											</ul>
											<a href="#" class="size_guide">Size Guide</a>
										</div>
									</div>
									<div class="pd_quantity">
										<div class="pdq_left">
											<p>Select Quantity</p>
											<form id='myform' method='POST' action='#'>
												<input type='text' name='quantity' value='1' class='qty' />
												<input type='button' value='+' class='qtyplus'/>
												<input type='button' value='-' class='qtyminus'/>
											</form>
											<div class="in_stock">
												<a href="">In stock</a>
											</div>
										</div>
										<div class="pdq_right">
											<a href="#" class="add_w"><i class="fa fa-heart"></i> ADD TO WISHLIST</a>
										</div>
									</div>
									<div class="pd_total">
										<div class="pdq_left">
											<p>TOTAL PRICE</p>
											<span>$139.99</span>
										</div>
										<div class="pdq_right">
											<a href="#" class="add_cart"> ADD TO Cart</a>
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
