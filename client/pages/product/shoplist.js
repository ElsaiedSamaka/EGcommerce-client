import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import Pagination from "../../components/pagination/Pagination";
import ShopSlider from "../../components/shopslider/ShopSlider";

export default function Shoplist() {
  return (
    <>
      <Header />
      <NavBar />
      <ShopSlider />
      <section className="shop-listing-cc2 blog_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="shop_list shop_list2">
                    <div className="showing_result">
                      <a>
                        <span>SHOWING 1-25 OFF 54 PRODUCTS</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="sorting_right">
                    <div className="sort_by">
                      <span>SORT BY</span>
                    </div>
                    <div className="newest-oldest">
                      <div className="form-group">
                        <select className="form-control" id="sel1">
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
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img1 hover_img effect">
                      <a href="product_detail">
                        <img src="/images/suite1.jpg" alt="suite1" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal41"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CLASSIC SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal41"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img src="/images/suite1.jpg" alt="suite1" />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CLASSIC SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/suite2.jpg" alt="suite2" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal42"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CORPORATE FITTINGS</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal42"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img src="/images/suite2.jpg" alt="suite2" />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CORPORATE FITTINGS</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/suite3.jpg" alt="suite3" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal43"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>BLUE CASUAL SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal43"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img src="/images/suite3.jpg" alt="suite3" />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>BLUE CASUAL SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/suite1.jpg" alt="suite3" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal44"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>BLUE CASUAL SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal44"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img src="/images/suite1.jpg" alt="suite3" />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>BLUE CASUAL SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite shop_page1">
                    <div className="single_suite_img1 hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing1.jpg" alt="suite1" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal45"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CLASSIS SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal45"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing1.jpg"
                                alt="suite1"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CLASSIS SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing3.jpg" alt="suite3" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal46"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CORPORATE FITTINGS</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal46"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing3.jpg"
                                alt="suite3"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CORPORATE FITTINGS</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite shop_page3">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing3.jpg" alt="suite3" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal47"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>BLUE CASUAL SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal47"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing3.jpg"
                                alt="suite3"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>BLUE CASUAL SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite shop_page1">
                    <div className="single_suite_img1 hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing1.jpg" alt="suite1" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal48"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CLASSIS SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal48"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing1.jpg"
                                alt="suite1"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CLASSIS SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img1 hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing4.jpg" alt="suite1" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal49"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CLASSIS SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal49"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing4.jpg"
                                alt="suite1"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CLASSIS SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing6.jpg" alt="suite2" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal50"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CORPORATE FITTINGS</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal50"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing6.jpg"
                                alt="suite2"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CORPORATE FITTINGS</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing5.jpg" alt="suite3" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal51"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>BLUE CASUAL SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal51"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="/images/shop-listing5.jpg"
                                alt="suite3"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>BLUE CASUAL SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
                  {/* <!-- Modal END --> */}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_suite">
                    <div className="single_suite_img1 hover_img effect">
                      <a href="product_detail">
                        <img src="/images/shop-listing4.jpg" alt="suite1" />
                      </a>
                      <div className="cc_hover">
                        <ul className="cc_hover_ul">
                          <li className="h_cart">
                            <a
                              className="fa fa-shopping-cart"
                              href="product_checkout"
                            ></a>
                          </li>
                          <li className="h_heart">
                            <a className="fa fa-heart"></a>
                          </li>
                          <li className="h_search">
                            <a
                              data-toggle="modal"
                              data-target="#myModal52"
                              className="fa fa-search"
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="common_overlay"></div>
                    </div>
                    <div className="single_suite_text">
                      <a href="product_detail">
                        <h3>CLASSIS SUITE</h3>
                      </a>
                    </div>
                    <div className="single_suite_left">
                      <div className="suite_left_del">
                        <del>$17.99</del>
                      </div>
                      <div className="suite_left_p">
                        <p>$12.99</p>
                      </div>
                    </div>
                    <div className="single_suite_right">
                      <ul>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star"></a>
                        </li>
                        <li>
                          <a className="fa fa-star-o"></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="myModal52"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="m_img_left">
                            <a href="product_detail">
                              <img
                                src="//images/shop-listing4.jpg"
                                alt="suite1"
                              />
                            </a>
                          </div>
                          <div className="p_detail_right">
                            <div className="p_slider_box_details">
                              <a href="product_detail">
                                <h3>CLASSIS SUITE</h3>
                              </a>
                              <div className="single_suite_right">
                                <ul>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star"></a>
                                  </li>
                                  <li>
                                    <a className="fa fa-star-o"></a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum eget porttitor
                                nulla. Pellentesque consequat lorem a nisl
                                porttitor, vel finibus purus vehicula. Proin at
                                rhoncus diam. Curabitur dictum mi at odio
                                eleifend pharetra a in felis. Sed massa arcu,
                                vehicula.
                              </p>
                            </div>
                            <div className="pd_color">
                              <p>color</p>
                              <ul className="s_colors">
                                <li>
                                  <a className="col_1"></a>
                                </li>
                                <li>
                                  <a className="col_2"></a>
                                </li>
                                <li>
                                  <a className="col_3"></a>
                                </li>
                                <li>
                                  <a className="col_4"></a>
                                </li>
                                <li>
                                  <a className="col_5"></a>
                                </li>
                              </ul>
                            </div>
                            <div className="pd_size">
                              <p>Size:</p>
                              <ul className="s_size">
                                <li>
                                  <a>S</a>
                                </li>
                                <li>
                                  <a>M</a>
                                </li>
                                <li>
                                  <a>L</a>
                                </li>
                                <li>
                                  <a>XL</a>
                                </li>
                                <li>
                                  <a>XXL</a>
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
  );
}
