import { MENU_LINK } from "../utils/constants";
import { useParams } from "react-router-dom"
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
 
const RestaurantMenu = ()=> {
    const {resid} = useParams();
    const [itemList , setItemList] = useState([]);
   
    useEffect(()=>{
        fetch(MENU_LINK+resid).
        then((response)=>{return menuDataJSON = response.json();}).
        then((jsonData) => {setItemList(jsonData?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards)
    })
    },[resid]);

    if(itemList?.length === 0)
        return <Shimmer/>;

    return (
        <div className="itemCardsContainer">
           {itemList?.map((item)=>{
                return <ItemCard key={item?.card?.info?.id} itemInfo={item?.card?.info}/>
           })}
        </div>
    )
}

export default RestaurantMenu;