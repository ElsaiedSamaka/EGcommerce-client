import Header from "../../components/header/Header";
export default function Details() {
  return (
    <>
      <Header />
      <div className="cart_slider_area page_cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12">
              <div className="cart_heading">
                <h2 className="breadcumb_head">MANAGE COLLECTIONS</h2>
                <p>ADMIN PANEL</p>
                <div className="breadcumb_box">
                  <ul className="breadcumb_menu">
                    <li>
                      <a>collection</a>
                    </li>
                    <li className="active">
                      <a>Products</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="checkout_main_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="checkout_box">
                <div className="billing_detail_heading">
                  <h4>Item Detail</h4>
                </div>
                <form role="form">
                  <div className="checkout_double_form">
                    <div className="checkout_double_left">
                      <label>id</label>
                      <input type="text" />
                    </div>
                    <div className="checkout_double_right">
                      <label>Title</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="country_select categories_select">
                    <div className="form-group">
                      <label for="sel1">Categories</label>
                      <select className="form-control" id="sel1">
                        <option>mens</option>
                        <option>males</option>
                      </select>
                    </div>
                  </div>

                  <div className="checkout_double_form">
                    <div className="checkout_double_left">
                      <label>Image</label>
                      <input type="file" />
                    </div>
                    <div className="checkout_double_right">
                      <label>Category</label>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="checkout_double_form">
                    <div className="checkout_double_left">
                      <label>Size</label>
                      <input type="radio" value="xs" />
                      <label>xs</label>
                      <input type="radio" value="s" />
                      <label>s</label>
                      <input type="radio" value="l" />
                      <label>l</label>
                      <input type="radio" value="xl" />
                      <label>xl</label>
                      <input type="radio" value="xxl" />
                      <label>xxl</label>
                    </div>
                    <div className="checkout_double_right">
                      <label>in Stock</label>
                      <input type="checkbox" />
                    </div>
                  </div>

                  <div className="checkout_single_submit">
                    <input type="submit" value="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
