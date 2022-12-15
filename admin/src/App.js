/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Switch, Route, Redirect } from "react-router-dom";
// import Home from "./pages/Home";
// import Tables from "./pages/Tables";
// import Billing from "./pages/Billing"
// import Profile from "./pages/Profile";
// import Form from "./pages/Form";
// import Blog from "./pages/Blog";
// import AjoutBlog from "./pages/AjoutBlog";
// import Single from "./pages/Single";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import Projects from "./pages/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectForm from "./pages/forms/ProjectForm";
import Members from "./pages/Members";
import MemberForm from "./pages/forms/MemberForm";
import Posts from "./pages/Posts";
import PostForm from "./pages/forms/PostForm";
import Partners from "./pages/Partners";
import PartnerForm from "./pages/forms/PartnerForm";
import Services from "./pages/Services";
import ServiceForm from "./pages/forms/ServiceForm";
import Artists from "./pages/Artists";
import ArtistForm from "./pages/forms/ArtistForm";
import Feedbacks from "./pages/Feedbacks";
import Collaborations from "./pages/Collaborations";
import JobRequests from "./pages/JobRequests";
import SliderForm from "./pages/forms/SliderForm";
import Sliders from "./pages/Sliders";
import Pages from "./pages/Pages";
import SignIn from "./pages/SignIn";
import AddAccount from "./pages/AddAccount";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArtists } from "./actions/artists";
import { getProjects } from "./actions/projects";
import { getMembers } from "./actions/members";
import { getPosts } from "./actions/posts";
import { getFeedbacks, getWorkDMs, getDevis } from "./actions/reclamations";
import { getPages } from "./actions/pages";
import { getPartners } from "./actions/partners";
import { getServices } from "./actions/services";
// import { getJobRequests } from "./actions/jobs";
import { getReels } from "./actions/reel";
import { getSliders } from "./actions/slider";
// import NotFound from "./pages/NotFound";

const MyRoute = ({ path, redirect, component }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <Route path={path}>
      {user ? (
        <Redirect to={redirect} />
      ) : (
        <>
          {component}
        </>
      )}
    </Route>
  )
}

const HomeRoute = ({ path, component }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <Route exact path={path}>
      {user ? (
        <>
          {component}
        </>
      ) : (
        <Redirect to="/sign-in" />
      )}
    </Route>
  )
}

const DefaultContainer = () => {

  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(async () => {
    await dispatch(getArtists());
    await dispatch(getProjects());
    await dispatch(getMembers());
    await dispatch(getPosts());
    await dispatch(getFeedbacks());
    await dispatch(getPages());
    await dispatch(getPartners());
    await dispatch(getServices());
    await dispatch(getWorkDMs());
    await dispatch(getDevis());
    // await dispatch(getJobRequests());
    await dispatch(getReels());
    await dispatch(getSliders());
  }, []);

  return (

    <Switch>
      <HomeRoute path="/add-account" component={<AddAccount />} />
      <MyRoute path="/sign-in" redirect="/" component={<SignIn />} />
      <Route
        exact
        path="/"
        render={() => (user ? <Redirect to="/sliders" /> : <Redirect to="/sign-in" />)}
      />;

      <Main>
        <HomeRoute path="/projets" component={<Projects />} />
        <HomeRoute path="/equipe" component={<Members />} />
        <HomeRoute path="/posts" component={<Posts />} />
        <HomeRoute path="/partenaires" component={<Partners />} />
        <HomeRoute path="/services" component={<Services />} />
        <HomeRoute path="/feedbacks" component={<Feedbacks />} />
        <HomeRoute path="/devis" component={<Collaborations />} />
        <HomeRoute path="/candidatures" component={<JobRequests />} />
        <HomeRoute path="/voice-over" component={<Artists />} />
        <HomeRoute path="/sliders" component={<Sliders />} />
        <HomeRoute path="/pages" component={<Pages />} />
        <HomeRoute path="/projet" component={<ProjectForm />} />
        <HomeRoute path="/projet/:id" component={<ProjectForm />} />
        <HomeRoute path="/membre" component={<MemberForm />} />
        <HomeRoute path="/membre/:id" component={<MemberForm />} />
        <HomeRoute path="/post" component={<PostForm />} />
        <HomeRoute path="/post/:id" component={<PostForm />} />
        <HomeRoute path="/partenaire" component={<PartnerForm />} />
        <HomeRoute path="/partenaire/:id" component={<PartnerForm />} />
        <HomeRoute path="/service" component={<ServiceForm />} />
        <HomeRoute path="/service/:id" component={<ServiceForm />} />
        <HomeRoute path="/voice-over-artist" component={<ArtistForm />} />
        <HomeRoute path="/voice-over-artist/:id" component={<ArtistForm />} />
        <HomeRoute path="/slider" component={<SliderForm />} />
        <HomeRoute path="/slider/:id" component={<SliderForm />} />
      </Main>
      {/* <Route path="*">
        <NotFound />
      </Route> */}
      {/* <Route exact path="/dashboard" component={Home} />
        <Route exact path="/tables" component={Tables} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/profile" component={Profile} /> */}

    </Switch>
  )
}

function App() {

  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route path="/" component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;















{/* <div className="App">
<Router>
  <Switch>
    <Route path="/add-account" exact component={AddAccount} />
    <Route path="/sign-in" exact component={SignIn} />


    <Main>
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/partners" component={Partners} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/feedbacks" component={Feedbacks} />
      <Route exact path="/workdms" component={Collaborations} />
      <Route exact path="/job-requests" component={JobRequests} />
      <Route exact path="/voice-over-artists" component={Artists} />
      <Route exact path="/sliders" component={Sliders} />
      <Route exact path="/pages" component={Pages} />
      <Route exact path="/project" component={ProjectForm} />
      <Route exact path="/member" component={MemberForm} />
      <Route exact path="/member/:id" component={MemberForm} />
      <Route exact path="/post" component={PostForm} />
      <Route exact path="/post/:id" component={PostForm} />
      <Route exact path="/partner" component={PartnerForm} />
      <Route exact path="/partner/:id" component={PartnerForm} />
      <Route exact path="/service" component={ServiceForm} />
      <Route exact path="/service/:id" component={ServiceForm} />
      <Route exact path="/voice-over-artist" component={ArtistForm} />
      <Route exact path="/voice-over-artist/:id" component={ArtistForm} />
      <Route exact path="/slider" component={SliderForm} />
      <Route exact path="/slider/:id" component={SliderForm} />




      
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/tables" component={Tables} />
      <Route exact path="/billing" component={Billing} />
      <Route exact path="/profile" component={Profile} />

    </Main>
  </Switch>
</Router>
</div> */}