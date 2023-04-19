import UserContext from "../utils/UserContext";
import { useContext } from "react";

const FoodItem = ({imageId,name,description,price}) => {

    // const {resData} = props;

    // // const {
    // //   name,
    // // } = resData;
    // const {imageId,name} = resData;
    // console.log(resData);

    return (
        <div className='res-card' style={{backgroundColor: '#e6e9ed'}}>
            <img 
              className='res-logo' 
              src= {
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
                imageId
              }
            />
            <h2>{name}</h2>
            <h2>{description}</h2>
            <h2>Price : {price /100}</h2>
        </div>
    )
}

export default FoodItem;