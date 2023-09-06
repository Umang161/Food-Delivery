import { useState } from "react"
import { LOGO_LINK } from "../utils/constants"

export const Header = () => {
    const [LogButton, setLogButton] = useState("Login");

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
            <button className="logButton" onClick={()=>
            {
                LogButton === "Login"
                ? setLogButton("Logout")
                : setLogButton("Login");
            }}>{LogButton}</button>
        </div>      
    )    
}