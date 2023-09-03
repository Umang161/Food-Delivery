import {CDN_LINK} from "../utils/constants";

export const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name , cuisines, avgRating, cloudinaryImageId} = resData.info;
    const cuisinesString = cuisines ? cuisines.join(",") : "";

    return (
        <div className="rest-card">
            <img className="rest-picture" src={CDN_LINK+cloudinaryImageId} />
            <h1>{name}</h1>
            <h3>{cuisinesString}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
}