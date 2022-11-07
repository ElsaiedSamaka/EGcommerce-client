import Header from "../../components/header/Header";
export default function Main({ products }) {
  let length = 10;
  let actaulLength = length - products.length;
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
      <section className="shop_listing_cc_area blog_area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_blog_sidebar">
                <div className="blog_categories">
                  <div className="b_cat_heading">
                    <h3>COLLECTIONS</h3>
                  </div>
                  <div className="b_cat_contents">
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa fa-angle-right"></i>Products
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-angle-right"></i>Orders
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-angle-right"></i>Carts
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-angle-right"></i>Users
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="shop_list">
                    <div className="showing_result">
                      <a href="">
                        <span>
                          SHOWING {products.indexOf(products[0]) + 1}-25 OFF{" "}
                          {products.length} PRODUCTS
                        </span>
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
            </div>

            <div className="col-md-9 col-sm-9 col-xs-12 ">
              <div className="card rounded shadow border-0">
                <div className="card-body p-5 bg-white rounded">
                  <div className="table-responsive">
                    <table
                      id="example"
                      style={{ width: "90 % ", marginTop: 10 }}
                      className="table table-striped table-bordered table-hover"
                    >
                      <thead className="b_cat_heading">
                        <tr>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Rating</th>
                          <th>in Stock</th>
                          <th>added Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          <>
                            <ProductRow products={products} />
                            <EmptyRow actaulLength={actaulLength} />
                          </>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12"></div>
            <div className="col-md-9 col-sm-9 col-xs-12 ">
              <div className="shop_pagination_area">
                <div className="row">
                  <div className="cc-pagination">
                    <div className="pev-page">
                      <a className="p-prev" href="#">
                        Prev
                      </a>
                    </div>
                    <div className="pagi-box">
                      <ul className="pagination">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li className="active">
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                      </ul>
                    </div>
                    <div className="next-page">
                      <a className="p-prev" href="#">
                        Next
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/products");
  const result = await res.json();
  const products = result.slice(0, 5);
  return {
    props: {
      products,
    },
  };
}

const ProductRow = ({ products }) => {
  return products.map((product, i) => (
    <tr key={i}>
      <td>{product.title.split(" ").slice(0, 3).join(" ")}</td>
      <td>
        {product.description.split(" ").slice(0, 5).join(" ")}
        ..
      </td>
      <td>${product.price}</td>
      <td>??</td>
      <td>{product.rating.rate}</td>
      <td>{product.inStock}</td>
      <td>{product.createdAt}</td>
      <td>
        <div className="actions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="15"
            height="15"
            onClick=""
          >
            <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="15"
            height="15"
            onClick=""
          >
            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </svg>
        </div>
      </td>
    </tr>
  ));
};
const EmptyRow = ({ actaulLength }) => {
  return [...Array(actaulLength)].map((row, i) => (
    <tr key={i}>
      <td>
        <br />
        <br />
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  ));
};
