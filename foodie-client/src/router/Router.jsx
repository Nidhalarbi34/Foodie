import {createBrowserRouter} from "react-router-dom";
import Mainn from "../layout/Mainn";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import { Signup } from "../components/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainn/>,
      children : [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
        {
          path: "/update-profile",
          element: <UpdateProfile/>
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>}
  ]);

  export default router ;