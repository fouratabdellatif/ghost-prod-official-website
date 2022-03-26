import React from "react";
import Aos from "aos";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GlobalStyle from "../globalStyles";
import News from "./blogComponents/news/News";
import Article from "./blogComponents/article/Article";
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Article />

      <Footer />
    </>
  );
};
export default Blog;
