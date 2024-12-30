import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurStores from "./pages/OurStores";
import HelpCenter from "./pages/HelpCenter";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/ourstores",
        element: <OurStores />,
      },
      {
        path: "/help",
        element: <HelpCenter />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
