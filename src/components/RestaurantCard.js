import { Link } from "react-router-dom";
import {CDN_LINK} from "../utils/constants";

export const RestaurantCard = (props) =>{
    const {resData} = props;
    const {id, name , cuisines, avgRating, cloudinaryImageId} = resData.info;
    const cuisinesString = cuisines ? cuisines.join(",") : "";

    return (      
        <Link to={"/restaurantmenu/"+id}>
        <div className="rest-card">
            <img className="rest-picture" src={CDN_LINK+cloudinaryImageId} />
            <h1>{name}</h1>
            <p>{cuisinesString}</p>
            <h4>{avgRating}</h4>
        </div>
        </Link>
    )
}