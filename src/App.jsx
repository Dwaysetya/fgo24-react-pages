import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Aboute from "./pages/Aboute";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboute",
    element: <Aboute />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
