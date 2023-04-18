import UserContext from "../utils/UserContext";
import { useContext } from "react";

const FoodItem = (props) => {

    const {resData} = props;

    // const {
    //   name,
    // } = resData;

    const { user } = useContext(UserContext);
    console.log(resData);

    return (
        <div className='res-card' style={{backgroundColor: '#e6e9ed'}}>
            {/* <img 
              className='res-logo' 
              src= {
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
                cloudinaryImageId
              }
            />
               */}
            <h2>{resData}</h2>
            {/* <h4>{price}</h4>
            <h4>{locality}</h4>
            <span>
              <h4>{user.name}</h4>
            </span> */}
        </div>
    )
}

export default FoodItem;