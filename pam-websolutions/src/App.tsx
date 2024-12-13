import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import SnowParticles from './components/SnowParticles';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

 // createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const isChristmasPeriod = (): boolean => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 11, 1); // December 1st
  const end = new Date(today.getFullYear() + 1, 0, 6, 23, 59, 59); // January 6th
  return today >= start && today <= end;
};

function App() {

  return (
    <>
        {isChristmasPeriod() && <SnowParticles />}
         <RouterProvider router={router} />
         <Footer />
    </>
  )
}

export default App
