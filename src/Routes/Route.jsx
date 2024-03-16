import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/main";
import OurServices from "../Pages/OurServices/OurServices";
import OurWork from "../Pages/OurWork/OurWork";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/services',
                element: <OurServices/>
            },
            {
                path:'/ourWork',
                element: <OurWork/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])

export default Router;