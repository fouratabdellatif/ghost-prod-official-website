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
// import LoadingScreen from "./components/LoadingScreen";
import { Route, Switch } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import Loader from "./components/Loader";
import ProjectsPage from "./pages/ProjectsPage";
import VoiceOverPage from "./pages/VoiceOverPage";
import VoiceOverArtistPage from "./pages/VoiceOverArtistPage";
import ProjectPage from "./pages/ProjectPage";
import MemberPage from "./pages/MemberPage";
import PostPage from "./pages/PostPage";
import ServicesPage from "./pages/ServicesPage";
import { useDispatch } from "react-redux";
import { getServices } from "./actions/services";
import { getPages } from "./actions/pages";
import { getArtists } from "./actions/artists";
import { getPosts } from "./actions/posts";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>
      setLoading(!isLoading)
      , 3000)
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const dispatch = useDispatch();
  useEffect(async () => {
      await dispatch(getServices());
      await dispatch(getPages());
      await dispatch(getArtists());
      await dispatch(getPosts());
  }, [dispatch]);

  return isLoading ? (
    // <LoadingScreen
    //   loading={isLoading}
    //   bgColor='#292929'
    // // spinnerColor='#000'
    // // textColor='#676767'
    // // logoSrc='../public/images/logo/logo.png'
    // // text='Veuillez patienter pendant le chargement de la page...'
    // />
    <Loader
      loading={isLoading}
      bgColor='#292929'
    />
  ) : (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/blog/:id' component={PostPage} />
        <Route path='/about-us' component={AboutUsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route exact path='/team' component={TeamPage} />
        <Route exact path='/team/:id' component={MemberPage} />
        <Route exact path='/realisations' component={ProjectsPage} />
        <Route exact path='/realisations/:id' component={ProjectPage} />
        <Route exact path='/voice-over' component={VoiceOverPage} />
        <Route exact path='/voice-over/:id' component={VoiceOverArtistPage} />
        <Route exact path='/services' component={ServicesPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;