import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocerry = lazy(() => import("./components/Grocerry"));

const AppLayout = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    // Authentication logic
    const data = { username: "Rahul Yadav" };
    setUsername(data.username);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restId",
        element: <Restaurant />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<h1>Loading..... </h1>}>
            <Grocerry />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
