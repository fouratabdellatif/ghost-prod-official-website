import React, { useEffect, useState } from "react";
import Aos from "aos";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
