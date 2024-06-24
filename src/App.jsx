// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <About />
      <Outlet />
    </>
  );
}

export default App;
