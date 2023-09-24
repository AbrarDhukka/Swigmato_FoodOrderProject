//Restaurant Card Components
const CardComp = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
      resData?.info;
  
    return (
      <div id="rest-card-container">
        <div id="rest-card">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="food image"
          ></img>
          <h2 id="name-res">{name}</h2>
          
          <div id="rating-block">
          <h3 id="rating">{avgRating}</h3>
            <img id="rating-star" src="https://www.clipartmax.com/png/middle/307-3078264_star-rating-icon-rating-star-single-png.png"></img>
          </div>
          <h3 id="cuis">{cuisines.join(", ")}</h3>
          <h3 id="price">{costForTwo}</h3>
        </div>
      </div>
    );
  };

  export default CardComp