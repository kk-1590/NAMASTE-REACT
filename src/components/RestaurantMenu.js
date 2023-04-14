import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL, swiggy_menu_api_URL} from '../utils/constants';
import Shimmer from './Shimmer'

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
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9805778&lng=77.6649801&restaurantId=" + resId + "&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        // console.log(json.data.cards[0].card.card.info.name);
        // console.log(json.data.cards[0].card.card.info.cloudinaryImageId);
        // console.log(json.data);
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[1].card.info.name);
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards?.[1].card.info.name);
        setRestaurant(json.data);
        // console.log(IMG_CDN_URL + restaurant?.cards?.[0].card?.card?.info?.clodinaryImageId);
    }



  return (!restaurant?.cards) ? <Shimmer /> : (
    <div className='menu'>
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src = {IMG_CDN_URL + restaurant?.cards?.[0].card?.card?.info.cloudinaryImageId } alt="Food Item" />
            <h3>{restaurant.cards?.[0].card?.card?.info.name}</h3>
            <h3>{restaurant.cards?.[0].card?.card?.info.area}</h3>
            <h3>{restaurant.cards?.[0].card?.card?.info.city}</h3>
            <h3>{restaurant.cards?.[0].card?.card?.avgRating}</h3>
        </div>
        <div>
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[1].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[2].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[3].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[4].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[5].card.info.name}
            <br />
        </div>
    </div>
  )
}

export default RestaurantMenu