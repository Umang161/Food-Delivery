import {RestaurantCard} from "./RestaurantCard"
import { useEffect, useState } from "react"
import { SWIGGY_LIVE_API } from "../utils/constants"
import Shimmer from "./Shimmer"

const Body = () => {
    let [restaurantData, setRestaurantData] = useState([]);

    const fetchData = async () => {
        const liveData = await fetch(SWIGGY_LIVE_API);
        const liveDataJSON = await liveData.json();
        setRestaurantData(liveDataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {fetchData()},[]);

    //Conditional Rendering.
    if(restaurantData.length === 0){
        console.log("Shimmer UI Rendered")
        return <Shimmer />;
    }

    return(
        <div className="body">
            <div className="search-bar"> Search Bar Here.</div>
            <div className="filter">
                <button className="topRated" onClick={()=>
                 {
                  const filteredList = restaurantData.filter((restaurant) => { return restaurant.info.avgRating > 4.5});
                  setRestaurantData(filteredList);
                 }
                }>Top-Rated</button>    
            </div>
            <div className="restaurants-container">
                {restaurantData.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                })} 
            </div>
        </div>  
    )
}

export default Body;