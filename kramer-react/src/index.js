import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/home";
import { ProductsPage } from "./routes/products";
import { CalibrationPage } from "./routes/calibration";
import BatchPage from "./routes/batch";
import ContainersPage from "./routes/containers";
import NumberOfTests from "./routes/number-of-tests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/calibration",
    element: <CalibrationPage />,
  },
  {
    path: "/batch",
    element: <BatchPage />,
  },
  {
    path: "containers",
    element: <ContainersPage />,
  },
  {
    path: "number-of-tests",
    element: <NumberOfTests />,
  },
]);

const root = ReactDOM.hydrateRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
