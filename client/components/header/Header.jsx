export default function Header() {
  return (
    <div className="header_top_area">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="header_logo">
              <h2>Egycommerce</h2>
            </div>
            <div className="devider">
              {/* <img src="/images/devider.png" alt="devider" /> */}
            </div>
          </div>
          <div className="col-md-4 col-sm-3 col-xs-12">
            <div className="header_search">
              <input type="text" placeholder="Search" />
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="header_social">
              <ul id="head_social">
                <li>
                  <a className="fa fa-facebook"></a>
                </li>
                <li>
                  <a className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
            <div className="header_currency">
              <ul id="head_currency">
                <li>
                  <a>
                    EGP <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul id="currency_dropdown">
                    <li>
                      <a>EUR</a>
                    </li>
                    <li>
                      <a>USD</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header_cart">
              <div className="head_cart_img">
                <img src="/images/hd_cart.png" alt="" />
              </div>
              <div className="head_cart_text">
                <div className="head_cart_text_top">
                  <a href="product_checkout">
                    <p>CART (3)</p>
                  </a>
                </div>
                <div className="head_cart_text_bottom">
                  <a href="product_checkout">
                    <p>CHECKOUT</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
