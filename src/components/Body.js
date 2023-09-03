import {RestaurantCard} from "./RestaurantCard"
import {restaurantsList} from "../utils/mock-data"

export const Body = () => {
    return(
        <div className="body">
            <div className="search-bar"> Search Bar Here.</div>
            <div className="restaurants-container">
                {restaurantsList.map((restaurant) => {
                    return <RestaurantCard resData={restaurant} />
                })} 
            </div>
        </div>  
    )
}