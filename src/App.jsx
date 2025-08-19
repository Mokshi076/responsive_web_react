import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout (named export)
import { AppLayout } from "./components/Layout/AppLayout";
import "./App.css";

// pages (default exports under components/pages)
import Home from "./pages/Home"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sweets from "./pages/Sweets";


// error page (named export)
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sweets",
        element: <Sweets />,
      },
    ],
  }
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
