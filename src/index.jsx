import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import ErrorPage from "./pages/ErrorPage";
import Results from "./pages/Results"
import Freelances from "./pages/Freelances";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: <Results />
  },
  {
    path: "/freelances",
    element: <Freelances />,
  },
  {
    path: "/survey",
    element: <Survey />,
    children: [
      {
        path: ":questionNumber",
        element: <Survey />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
