import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {headData } from "./utilities/data";
import HeadingComp from "./components/HeadingComp";
import BodyComp from "./components/BodyComp";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import MenuPage from "./components/MenuPage";
import SubHead from "./components/SubHead";
import { userContext } from "./utilities/userContext";
import { Provider } from "react-redux";
import { appStore } from "./utilities/Redux/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import OrderSuccess from "./components/OrderSuccess";

const App = () => {
  const [user, setUser]=useState("Abrar")
  return (
    <Provider store={appStore}>
    <userContext.Provider value={[user, setUser]}>
    <div className="overflow-hidden flex flex-col items-center justify-center">  
      <HeadingComp data={headData}></HeadingComp>
      <Outlet></Outlet> 
      <Footer></Footer>
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<App></App>,
      children:[
        {
          path:"/",
          element:<BodyComp></BodyComp>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/restaurant/:resId",
          element:<MenuPage></MenuPage>
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/orderConfirmation",
          element:<OrderSuccess></OrderSuccess>
        }
      ],
      errorElement:<ErrorPage></ErrorPage>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
