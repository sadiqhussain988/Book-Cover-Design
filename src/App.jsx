import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";

import Author from "./Pages/Author";
import Contact from "./Pages/Contact";
import PreOrders from "./Pages/PreOrder";

const MainLayout = () => {
   return (
      <div className="overflow-x-hidden">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

const router = createBrowserRouter([
  {
    path: '/',
     element: <MainLayout />,
     children: [
      { path:"", element: <Home/> },
      { path:"about", element: <About /> },
      { path:"author", element: <Author /> },
      { path:"gallery", element: <Gallery /> },
      { path:"order", element: <PreOrders /> },
      { path:"author", element: <Author /> },
      { path:"contact", element: <Contact /> },
     
     ],
  },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
