import { useState} from "react";
import { useEffect } from "react";


const useRestaurant = (resId) => {

    const [restaurant,setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9805778&lng=77.6649801&restaurantId=" + resId + "&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
        
        // console.log(json.data.cards[0].card.card.info.name);
        // console.log(json.data.cards[0].card.card.info.cloudinaryImageId);
        // console.log(json.data);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[1].card.info.name);
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards?.[1].card.info.name);
        // console.log(IMG_CDN_URL + restaurant?.cards?.[0].card?.card?.info?.clodinaryImageId);

        return restaurant;
    }

    // return restaurantData;
}

export default useRestaurant;