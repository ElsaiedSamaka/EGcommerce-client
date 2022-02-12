export default function ContactForm() {
    return <section class="contact_page_form_area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sx-12 col-xs-12">
						<div class="contact_page_form">
							<div class="contact_page_form_head">
								<h1>QUICK CONTACT</h1>
								<span>FILL THE FORM</span>
							</div>
							<div class="contact_page_forms">
								<form action="contact_process.php" method="post">
									<div class="single_input">
										<div class="single_input_left">
											<label>YOUR NAME</label>
											<input type="text" required name="name" />
										</div>
										<div class="single_input_right">
											<label>EMAIL ADDRESS</label>
											<input type="text" required name="email"/>
										</div>
									</div>
									<div class="single_input">
										<div class="single_input_left">
											<label>Phone Number</label>
											<input type="text" required name="phone"/>
										</div>
										<div class="single_input_right">
											<label>Website</label>
											<input type="text" name="website"/>
										</div>
									</div>
									<div class="text_box">
										<label>Message</label>
										<textarea name="message" cols="30" rows="10" required></textarea>
									</div>
									<input type="submit" name="submit" value="SUBMIT FORM"/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
};
