// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
//import SocialLinks from "./components/SocialLinks";
import Footer from "./pages/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <About />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
