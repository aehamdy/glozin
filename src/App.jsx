import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurStores from "./pages/OurStores";

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
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/ourstores",
        element: <OurStores />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
