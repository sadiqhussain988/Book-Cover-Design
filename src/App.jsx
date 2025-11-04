import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './componets/common/Navbar';
import Footer from './componets/common/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


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
      { path: "/", element: <Home/> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
     
     ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
