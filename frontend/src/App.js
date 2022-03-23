import Aos from "aos";
import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";

import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import Blog from "./components/BlogBox";
import Actualite from "./components/Actualite";
import Card from "./components/Card"


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
     
       <Actualite 
      title='FILM'
      soustitle='hiiii'
      imageUrl='https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
       />
      <InfoSection {...InfoData} />
      <Footer toggle={toggle} />
    </>
  );
}

export default App;
