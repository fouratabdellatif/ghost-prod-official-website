/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Aos from "aos";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import LoadingScreen from "./components/LoadingScreen";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>
      setLoading(!isLoading)
      , 1500)
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return isLoading ? (
    <LoadingScreen
      loading={isLoading}
      bgColor='#292929'
    // spinnerColor='#000'
    // textColor='#676767'
    // logoSrc='../public/images/logo/logo.png'
    // text='Veuillez patienter pendant le chargement de la page...'
    />
  ) : (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
