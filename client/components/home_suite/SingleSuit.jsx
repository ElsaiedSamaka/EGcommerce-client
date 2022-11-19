import RatingComponent from "./RatingComponent";

const SingleSuit = ({ product }) => {
  console.log(product);
  return (
    <div className="col-md-3 col-sm-3 col-xs-12">
      <div className="single_suite">
        <div className="single_suite_img hover_img effect">
          <a href="product_detail">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: 244, maxHeight: 370 }}
              />
            ) : (
              <img
                src="/images/suite1.jpg"
                alt={product.title}
                style={{ maxWidth: 244, maxHeight: 370 }}
              />
            )}
          </a>
          <div className="cc_hover">
            <ul className="cc_hover_ul">
              <li className="h_cart">
                <a className="fa fa-shopping-cart" href="product_checkout"></a>
              </li>
              <li className="h_heart">
                <a className="fa fa-heart" href="#"></a>
              </li>
              <li className="h_search">
                <a
                  data-toggle="modal"
                  data-target="#myModal21"
                  className="fa fa-search"
                ></a>
              </li>
            </ul>
          </div>
          <div className="common_overlay"></div>
        </div>
        <div className="single_suite_text">
          <a href="product_detail">
            <h5>{product.title.split(" ").slice(0, 3).join(" ")}</h5>
          </a>
        </div>
        <div className="single_suite_left">
          <div className="suite_left_del">
            <del>${product.discount ? product.discount : ""}</del>
          </div>
          <div className="suite_left_p">
            <p>$ {product.price ? product.price : " free "}</p>
          </div>
        </div>
        <RatingComponent productRating={product.rate} />
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="myModal21"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="m_img_left">
                <a href="product_detail">
                  <img src="/images/suite1.jpg" alt="" />
                </a>
              </div>
              <div className="p_detail_right">
                <div className="p_slider_box_details">
                  <a href="product_detail">
                    <h3>GRAY COLOR CORPORATE SUITE</h3>
                  </a>
                  <div className="single_suite_right">
                    <ul>
                      <li>
                        <a className="fa fa-star" href="#"></a>
                      </li>
                      <li>
                        <a className="fa fa-star" href="#"></a>
                      </li>
                      <li>
                        <a className="fa fa-star" href="#"></a>
                      </li>
                      <li>
                        <a className="fa fa-star" href="#"></a>
                      </li>
                      <li>
                        <a className="fa fa-star-o" href="#"></a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eget porttitor nulla. Pellentesque consequat
                    lorem a nisl porttitor, vel finibus purus vehicula. Proin at
                    rhoncus diam. Curabitur dictum mi at odio eleifend pharetra
                    a in felis. Sed massa arcu, vehicula.
                  </p>
                </div>
                <div className="pd_color">
                  <p>color</p>
                  <ul className="s_colors">
                    <li>
                      <a className="col_1" href="#"></a>
                    </li>
                    <li>
                      <a className="col_2" href="#"></a>
                    </li>
                    <li>
                      <a className="col_3" href="#"></a>
                    </li>
                    <li>
                      <a className="col_4" href="#"></a>
                    </li>
                    <li>
                      <a className="col_5" href="#"></a>
                    </li>
                  </ul>
                </div>
                <div className="pd_size">
                  <p>Size:</p>
                  <ul className="s_size">
                    <li>
                      <a href="#">S</a>
                    </li>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a href="#">L</a>
                    </li>
                    <li>
                      <a href="#">XL</a>
                    </li>
                    <li>
                      <a href="#">XXL</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleSuit;
