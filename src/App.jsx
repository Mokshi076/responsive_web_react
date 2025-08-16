import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

// pages (default exports under components/pages)
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Sweets from "./components/pages/Sweets.jsx";

// layout (default export)
import AppLayout from "./components/AppLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Sweets",
        element: <Sweets />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
