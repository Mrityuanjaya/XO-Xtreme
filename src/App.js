import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import RulesPage from "./pages/RulesPage/RulesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/rules",
                element: <RulesPage />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

root.render(<RouterProvider router={router} />);
