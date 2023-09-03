import { LOGO_LINK } from "../utils/constants"

export const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={LOGO_LINK}/>
            <div className="navbar-container">
                <ul className="navigation-items">
                    <li>About Us</li>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>My Profile</li>
                </ul>
            </div>
        </div>      
    )    
}