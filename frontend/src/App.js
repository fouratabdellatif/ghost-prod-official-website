import Aos from "aos";
import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import HomeStart from "./components/HomeStart";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

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
      <HomeStart slides={SliderData} />
      <InfoSection {...InfoData} />
      <Footer />
    </>
  );
}

export default App;
