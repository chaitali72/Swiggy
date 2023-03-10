import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import { Provider } from "react-redux";
import store from "./utills/cartStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
const AboutComponent = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <AboutComponent />
          </Suspense>
        ),
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },

      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
