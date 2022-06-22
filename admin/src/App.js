/* eslint-disable react-hooks/exhaustive-deps */
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing"
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import AjoutBlog from "./pages/AjoutBlog";
import Single from "./pages/Single";
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

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />


          <Main>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/project" component={ProjectForm} />
            <Route exact path="/member" component={MemberForm} />
            <Route exact path="/member/:id" component={MemberForm} />
            <Route exact path="/post" component={PostForm} />
            <Route exact path="/post/:id" component={PostForm} />
            <Route exact path="/partner" component={PartnerForm} />
            <Route exact path="/partner/:id" component={PartnerForm} />

            <Route exact path="/Single/:postId" component={Single} />
            <Route exact path="/AjoutBlog" component={AjoutBlog} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/profile" component={Profile} />

          </Main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
