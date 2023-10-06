import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";

const Grocerry = lazy(() => import("./components/Grocerry"));

const AppLayout = () => {
  const [username, setUsername] = useState("new user");

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
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
