import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./componets/common/Navbar";
import Footer from "./componets/common/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import PreOrder from "./Pages/PreOrder";
import Author from "./Pages/Author";
import Contact from "./Pages/Contact";

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
      { path:"order", element: <PreOrder /> },
      { path:"author", element: <Author /> },
      { path:"contact", element: <Contact /> },
     
     ],
  },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
