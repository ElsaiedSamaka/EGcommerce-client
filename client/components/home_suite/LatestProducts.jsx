import SingleSuit from "./SingleSuit";

export default function LatestProducts({ products }) {
  return (
    <section className="suite_one_area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="sunglasses">
              <h2>FEATURED PRODUCTS</h2>
              <div className="sun_span">
                <span>COOLEST COLLECTION OF THE SEASON</span>
              </div>
              <div className="sun_line"></div>
            </div>
            <div className="row">
              {products.map((product, i) => (
                <SingleSuit product={product} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
