import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function HomeSlider({ products }) {
  console.log(products[1].category);
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="home3_slider_area">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={4}
        nav={true}
        navText={["left", "right"]}
        dots={false}
        animateIn={true}
        {...options}
      >
        {products && products.length > 0
          ? products.map((product, i) => (
              <div key={i} className="item ">
                <div className="home3_slider_image">
                  <div className="slider3-img cc-h-layer">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        Loading="lazy"
                      />
                    ) : (
                      <img
                        src="/images/homepage2_s4.jpg"
                        alt={product.title}
                        Loading="lazy"
                      />
                    )}

                    <div className="b_hover_box">
                      <h4>{product.category}</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </div>
                  <div className="home3_slider_text">
                    <div className="home3_slider_head">
                      <a href="">
                        <h2>
                          <span>{product.category}</span>
                          <br />
                          COLLECTIONS
                        </h2>
                      </a>
                    </div>
                    <div className="home3_slider_bottom_left">
                      <a href="">GO TO COLLECTION</a>
                    </div>
                    <div className="home3_slider_bottom_right">
                      <a href="">OTHER CLOTHERS</a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "loading"}
      </OwlCarousel>
    </div>
  );
}
