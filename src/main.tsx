import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CheckoutPage } from "./pages/Checkout";
import { SuccessPage } from "./pages/Success";
import { FailPage } from "./pages/Fail";
import { PortOneTest } from "./pages/PortOneTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckoutPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/fail",
    element: <FailPage />,
  },
  {
    path: "/portOneTest",
    element: <PortOneTest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
