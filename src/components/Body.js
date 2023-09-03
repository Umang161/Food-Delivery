import {RestaurantCard} from "./RestaurantCard"
import {restaurantsList} from "../utils/mock-data"
import { useState } from "react"

export const Body = () => {
    let [restaurantData, setRestaurantData] = useState(restaurantsList);

    return(
        <div className="body">
            <div className="search-bar"> Search Bar Here.</div>
            <div className="filter">
                <button className="topRated" onClick={()=>
                 {
                  const filteredList = restaurantsList.filter((restaurant) => { return restaurant.info.avgRating > 4.5});
                  console.log(filteredList);
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