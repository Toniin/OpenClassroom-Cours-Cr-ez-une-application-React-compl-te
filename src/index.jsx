import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import ErrorPage from "./pages/ErrorPage";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import { ThemeProvider, SurveyProvider } from "./utils/context";
import Footer from "./components/Footer";
// import GlobalStyle from "./utils/style/GlobalStyle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: <Results />,
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
        element: <Survey />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
        <RouterProvider router={router} />
        <Footer />
      </SurveyProvider>
    </ThemeProvider>
    {/* <GlobalStyle /> */}
  </React.StrictMode>
);
