import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";


const Body = () => {
    //Local state variable - super powerful variable

    const [allRestaurants, setAllRestaurants] = useState([]);

    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);

    const [inputValue,setInputValue] = useState('');

    const { user, setUser} = useContext(UserContext);


    // console.log('render()');

    //empty dependency array ==> once after render
    //dependency array [searchText] ==> once after initial render + everytime after render(when searchText changes)
    useEffect(() => {
        //API call
        // console.log('call this whenever a dependency is changed');
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json);
        //Optional chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setListOfFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const offline = useOnline();
    if(!offline) {
        return <h1>Offline, please check your internet connection</h1>
    }

    // console.log('render');

    //Conditional Rendering
    //if restaurant is empty => shimmer ui
    //if restaurant has data => actual data ui

    //not render component
    //Early Return
    if(!allRestaurants) return null;

    // if(listOfFilteredRestaurants?.length === 0) return <h1>No restaurant match your filter</h1>

    return allRestaurants?.length === 0 ? <Shimmer /> :  (
        <div className='body'>
            <div className="flex">
                <div className='filter'>
                    <button className="p-2 m-2 bg-purple-700 rounded-lg" 
                    onClick={
                        () => {
                            // const filteredList = listOfRestaurants.filter((res) => res.data.name === 'Pizza Pie');
                            const filteredList = allRestaurants.filter((res) => res.data.avgRating >= 4.2);
                            // console.log(restaurantList);
                            setListOfFilteredRestaurants(filteredList);
                        }
                    }>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="flex align-middle">
                    <input className="focus:bg-green-400" type='text' placeholder='Search' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    <button className="search-btn" 
                    onClick={() => {
                        const searchedRestaurants = filterData(allRestaurants,inputValue);
                        setListOfFilteredRestaurants(searchedRestaurants);
                        setInputValue('');
                    }}>
                        Search
                    </button>
                    <input value={user.name} onChange={
                        e => setUser({
                            name: e.target.value,
                            email: "xyz@gmail.com"
                        })
                    }/>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {listOfFilteredRestaurants.map((restaurant) => {
                    return (
                    <Link to={"/restaurant/" + restaurant.data.id}>
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    </Link>
                    )
                } )}
            </div>
        </div>
    )
}

export default Body;