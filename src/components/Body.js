import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //Local state variable - super powerful variable

    const [allRestaurants, setAllRestaurants] = useState([]);

    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);

    const [inputValue,setInputValue] = useState('');

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
            <div className="functions">
                <div className='filter'>
                    <button className="filter-btn" onClick={
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
                <div className="search-container">
                    <input type='text' placeholder='Search' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    <button className="search-btn" onClick={() => {
                        const searchedRestaurants = allRestaurants.filter((res) => res.data.name.toLowerCase().includes(inputValue.toLowerCase()))
                        setListOfFilteredRestaurants(searchedRestaurants);
                        setInputValue('');
                    }}>
                        Search
                    </button>
                </div>
            </div>
            <div className='res-container'>
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