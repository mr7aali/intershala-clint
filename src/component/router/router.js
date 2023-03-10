
import Blog from "../Blog/Ticket";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import PostDetails from "../PostDetails/PostDetails";
import Register from "../Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");




export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                
                element:<Home/>
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/ticket',
                element:<Blog/>
            },
            
            {
                path:'/postdetails/:id',
                element:<PostDetails/>,
                loader: ({ params }) => fetch(`https://intership-test-server.vercel.app/postDetails/${params.id}`)
            }
            

        ]
    },
    
      
    
])