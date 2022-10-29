export default function HomeSlider({ products }) {
  return (
    <div className="home3_slider_area">
      <div className="item ">
        <div className="home3_slider_image">
          <div className="slider3-img cc-h-layer">
            <img src="/images/homepage2_s4.jpg" alt="" />
            <div className="b_hover_box">
              <h4>ROYAL COLLECTIONS</h4>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className="home3_slider_text">
            <div className="home3_slider_head">
              <a href="">
                <h2>
                  <span>ROYAL</span>
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
    </div>
  );
}
