import { ITEM_PIC_LINK } from "../utils/constants";

const ItemCard = (props) => { 
    const {itemInfo} = props;
    const {name, price, imageId}= itemInfo;

    return( 
        <div className="itemCard">
            <img className="itemPic" src={ITEM_PIC_LINK+imageId}></img>
            <h1>{name}</h1>
            <h3>{price}</h3>         
        </div>
    )
}

export default ItemCard;