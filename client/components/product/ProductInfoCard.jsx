export default function ProductInfoCard() {
    return <section class="pd_tabbing_area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="tabbing_inner">
							<div role="tabpanel">

							  {/* <!-- Nav tabs --> */}
							  <ul class="nav nav-tabs tabbing_inner_tabs shortcode" role="tablist">
								<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">DESCRIPTION</a></li>
								<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">OTHER INFORMATION</a></li>
								<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">REVIEWS</a></li>
							  </ul>

							  {/* <!-- Tab panes --> */}
							  <div class="tab-content tab-p-details">
								<div role="tabpanel" class="tab-pane active" id="home">
									<div class="desc_panel">
										<h2>Mauris lacus lectus, condimentum non consequat sit amet, sollicitudin ut lorem. Fusce id pellentesque metus, non suscipit quam.</h2>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula suscipit nisi et, malesuada vulputate ligula. Aliquam et ex rhoncus, consectetur metus eget, pharetra nunc. </p><br/>
										
										<p>Aliquam nec consectetur lorem. Aenean tempus velit quis dui malesuada, at commodo dolor ultricies. Fusce ac sagittis sapien. Duis posuere nisl 
										quis ante vulputate, nec tristique nisl fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
										Pellentesque orci tellus, convallis ac mauris a, cursus blandit turpis. </p><br/>
										
										<div class="s_detail_accord_list">
											<ul>
												<li><a href="#"><i class="fa fa-angle-double-right"></i>Nam euismod neque orci, vitae sollicitudin diam euismod sed.</a></li>
												<li><a href="#"><i class="fa fa-angle-double-right"></i>Maecenas diam quam, pharetra eu tempus et, finibus non lacus. Duis vel massa quis magna aliquet lacinia.</a></li>
												<li><a href="#"><i class="fa fa-angle-double-right"></i>Mauris lacus lectus, condimentum non consequat sit amet, sollicitudin ut lorem.</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div role="tabpanel" class="tab-pane" id="profile">
									<div class="info_panel">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget porttitor nulla. Pellentesque consequat lorem a nisl porttitor, vel finibus purus vehicula. Proin at rhoncus diam. Curabitur dictum mi at odio eleifend pharetra a in felis. Sed massa arcu, vehicula suscipit nisi et, malesuada vulputate ligula. Aliquam et ex rhoncus, consectetur metus eget, pharetra nunc. </p>
									</div>
								</div>
								<div role="tabpanel" class="tab-pane" id="messages">
									<div class="review_panel">
										<div class="review_comments">
											<div class="review_heading">
												<div class="review_heading_left">
													<h2><span>Review for </span> "Gray Structured T-Shirt"</h2>
												</div>
												<div class="review_heading_right">
													<ul id="review_heading_star">
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
													</ul>
												</div>
											</div>
											<div class="single_review_comment">
												<div class="single_review_img">
													<img alt="" src="/images/images.jpg"/>
												</div>
												<div class="single_review_text">
													<h4>A Stunning Beauty!</h4>
													<ul id="single_review_star">
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
														<li><a class="fa fa-star" href=""></a></li>
													</ul>
													<p>Semper orci etiam ac ultricies ante. Donec lobortis variusjusto et. Curabitur egestas aliquet massa non elementum. Quisque at risus nisl. Aliquam erat volutpat. Suspendisse potenti. Nullam porta faucibus elit.</p>
													<div class="review_italic">
														<p><span>Nicole Bailey,</span> 12.05.2013</p>
													</div>
												</div>
											</div>
										</div>
										<div class="Review_input">
											<div class="review_input_heading">
												<h3>Write your review</h3>
											</div>
											<div class="review_comment_input">
												<input type="text" placeholder="Enter Your Nickname"/><br/>
												<input type="text" placeholder="Summary of your Review"/><br/>
												<textarea placeholder="Write your review" rows="10" cols="30" name=""></textarea><br/>
												<input type="submit" value="Submit Review"/>
											</div>
										</div>
									</div>
								</div>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
};
