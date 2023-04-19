import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {

    const {resData} = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      area,
      avgRating,
      lastMileTravelString,
      costForTwoString,
    } = resData?.data;
    

    const { user } = useContext(UserContext);

    return (
        <div className='res-card' style={{backgroundColor: '#e6e9ed'}}>
            <img 
              className='res-logo' 
              src= {
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
                cloudinaryImageId
              }
            />
              
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{area}</h4>
            <span>
              <h4>{avgRating}</h4>
              <h4>{lastMileTravelString}</h4>
              <h4>{costForTwoString}</h4>
              <h4>{user.name}</h4>
            </span>
        </div>
    )
}

export default RestaurantCard;