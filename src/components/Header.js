import { useState } from "react"
import { LOGO_LINK } from "../utils/constants"
import { Link } from "react-router-dom";

export const Header = () => {
    const [LogButton, setLogButton] = useState("Login");

    return (
        <div className="header">
            <img className="logo" src={LOGO_LINK}/>
            <div className="navbar-container">
                <ul className="navigation-items">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li> 
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
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