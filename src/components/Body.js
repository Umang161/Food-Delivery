import {RestaurantCard} from "./RestaurantCard"
import { useEffect, useState } from "react"
import { SWIGGY_LIVE_API } from "../utils/constants"
import Shimmer from "./Shimmer"

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        const liveData = await fetch(SWIGGY_LIVE_API);
        const liveDataJSON = await liveData.json();
        setRestaurantData(liveDataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(liveDataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {fetchData()},[]);

    //Conditional Rendering.
    if(restaurantData.length === 0){
        return <Shimmer />;
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="seachButton" onClick={()=>{
                        const foundRestaurants = restaurantData.filter((res)=>
                        {
                            if(res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                return res;
                        })
                        setFilteredList(foundRestaurants);
                    }}>Search</button>
                </div>
                <button className="topRated" onClick={()=>
                 {
                  const topRatedRestaurants = filteredList.filter((restaurant) => { return restaurant.info.avgRating > 4.5});
                  setFilteredList(topRatedRestaurants);
                 }
                }>Top-Rated</button>    
            </div>
            <div className="restaurants-container">
                {filteredList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                })} 
            </div>
        </div>  
    )
}

export default Body;