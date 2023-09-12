import React from "react"
import ReactDOM from "react-dom/client"
import {Header} from "./src/components/Header"
import Body from "./src/components/Body"
import About from "./src/components/About"
import Contact from "./src/components/Contact"
import Error from "./src/components/Error"
import Cart from "./src/components/Cart"
import RestaurantMenu from "./src/components/RestaurantMenu"

import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
        {
            path:"/",
            element:<Body />,
        },    
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/cart",
            element:<Cart />
        },
        {
            //This resid will be passed to component using route prop.
            //We need not to manually pass this as a prop.
            //We can get that prop in component using useParams() hook.
            path:"/restaurantmenu/:resid",
            element:<RestaurantMenu />
        }
        ],
        errorElement:<Error />
    }   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)