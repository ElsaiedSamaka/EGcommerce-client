const RatingComponent = ({ productRating }) => {
  let stars = Math.floor(productRating);
  let ostars = 5 - stars;
  return (
    <div className="single_suite_right">
      <ul>
        <Stars stars={stars} />
        <OStars ostars={ostars} />
      </ul>
    </div>
  );
};
export default RatingComponent;

const Stars = ({ stars }) =>
  [...Array(stars)].map((star, i) => {
    return (
      <li key={i}>
        {" "}
        <a className="fa fa-star"></a>{" "}
      </li>
    );
  });

const OStars = ({ ostars }) =>
  [...Array(ostars)].map((star, i) => {
    return (
      <li key={i}>
        {" "}
        <a className="fa fa-star-o"></a>{" "}
      </li>
    );
  });
