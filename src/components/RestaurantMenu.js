import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {IMG_CDN_URL, swiggy_menu_api_URL} from '../utils/constants';
import Shimmer from './Shimmer'
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';



const RestaurantMenu = () => {
    const params = useParams();
    let arr = [];
    const { resId } = params;
    // console.log(params);

    const [restaurant,setRestaurant] = useState({});

    // const arr = restaurant.data.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

    // let arr = [];

    // const dispatch = useDispatch();

    // const handleAddItem = () => {
    //     dispatch(addItem("Grapes"))
    // };

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    // let arr = restaurant?.data?.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

    async function getRestaurantInfo() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9805778&lng=77.6649801&restaurantId=" + resId + "&submitAction=ENTER"
        );
        const json = await data.json();
        setRestaurant(json,() => {
            arr = json.data.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        });
        console.log(json);
        // console.log(json.data.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name);
        console.log(json.data.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        //  console.log(arr);
        // for(let i = 0; i < arr.length; i++){
        //     console.log(arr[i].card.info.name);
        // }
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name);
        // console.log(json.data.cards[0].card.card.info.name);
        // console.log(json.data.cards[0].card.card.info.cloudinaryImageId);
        // console.log(json.data);
        // console.log(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[i].card.info.name);
        // const arr = json.data.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

        // for(let i = 1; i < arr.length() ; i++){
        //     console.log(arr[i].card.info.name);
        // }
        // console.log(json.data.cards?[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title);
        // console.log(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title);
        // console.log(IMG_CDN_URL + restaurant?.cards?.[0].card?.card?.info?.clodinaryImageId);
        // console.log(json.data.cards?[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title);
    }

    // console.log(arr);

    // const dispatch = useDispatch();
    // const handleAddItem = () => {
    //     dispatch(addItem("Grapes"));
    // }

    // const addFoodItem = (item) => {
    //     dispatch(addItem(item));
    // }

    




  return (!restaurant) ? <Shimmer /> : (
    <div className='menu'>
        <div className='m-5'>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src = {IMG_CDN_URL + restaurant?.data?.cards?.[0].card?.card?.info.cloudinaryImageId } alt="Food Item" />
            <h3>{restaurant?.data?.cards?.[0].card?.card?.info.name}</h3>
            <h3>{restaurant?.data?.cards?.[0].card?.card?.info.area}</h3>
            <h3>{restaurant?.data?.cards?.[0].card?.card?.info.city}</h3>
            <h3>{restaurant?.data?.cards?.[0].card?.card?.avgRating}</h3>
        </div>
        {/* <div>
            <button className='p-2 m-5 bg-green-100' onClick={
                () => handleAddItem()
            }>Add Item</button>
        </div> */}
        {/* <div>
            {(restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[1].card.info.name)}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[2].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[3].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[4].card.info.name}
            <br />
            {restaurant.cards?.[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards?.[5].card.info.name}
            <br />
        </div> */}
        <div className='right'>
        {(!restaurant.data?.cards?.[3]) ? (restaurant.data?.cards?.[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item) => {
            return <li>{item.card.info.name}</li>
        })): (restaurant.data?.cards?.[3]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item) => {
            return <li>{item.card.info.name}</li>
        }))}

        {/* {
            (arr.map((item) => (
                <li>{item.card.info.name}</li>
            )))   
        } */}
        </div>
    </div>
  )
}

export default RestaurantMenu

// json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[i].card.info.name