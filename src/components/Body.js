import {RestaurantCard} from "./RestaurantCard"
import {restaurantsList} from "../utils/mock-data"
import { useEffect, useState } from "react"
import { SWIGGY_LIVE_API } from "../utils/constants"

export const Body = () => {
    let [restaurantData, setRestaurantData] = useState(restaurantsList);

    const fetchData = async () => {
        const liveData = await fetch(SWIGGY_LIVE_API);
        const liveDataJSON = await liveData.json();
        setRestaurantData(liveDataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {fetchData()},[]);

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