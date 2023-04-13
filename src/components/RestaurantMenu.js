import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL, swiggy_menu_api_URL} from '../utils/constants';

const RestaurantMenu = () => {
    const params = useParams();
    const { resId } = params;
    // console.log(params);

    const [restaurant,setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9805778&lng=77.6649801&restaurantId=32603&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        // console.log(json.data.cards[0].card.card.info.name);
        // console.log(json.data.cards[0].card.card.info.cloudinaryImageId);
        // console.log(json.data);
        setRestaurant(json.data.cards?.[0].card?.card?.info);
        // console.log(IMG_CDN_URL + restaurant?.cards?.[0].card?.card?.info?.clodinaryImageId);
    }

  return (
    <div>
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src = {IMG_CDN_URL + restaurant?.cloudinaryImageId } alt="Food Item" />
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
        </div>
        <div>
            {console.log(restaurant.itemsCard)}
        </div>
    </div>
  )
}

export default RestaurantMenu