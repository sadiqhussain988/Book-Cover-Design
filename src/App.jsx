import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './componets/common/Navbar';
import Footer from './componets/common/Footer';
import Home from './Pages/Home';
import About from './Pages/About';


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
      { index: true, element: <Home/> },
      { index: true, element: <About /> },
     
     ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
