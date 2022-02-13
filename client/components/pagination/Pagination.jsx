export default function Pagination() {
    return <div className="shop_pagination_area">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="cc-pagination">
							<div className="pev-page">
							  <a className="p-prev" href="#">Prev</a>
							</div>
							<div className="pagi-box">
								<ul className="pagination">
								  <li><a href="#">1</a></li>
								  <li className="active"><a href="#">2</a></li>
								  <li><a href="#">3</a></li>
								  <li><a href="#">4</a></li>
								  <li><a href="#">5</a></li>
								</ul>
							</div>
							<div className="next-page">
								<a className="p-prev" href="#">Next</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
};
