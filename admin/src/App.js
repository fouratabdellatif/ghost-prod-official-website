import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing"
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import Equipe from "./pages/Equipe";
import AjoutBlog from "./pages/AjoutBlog";
import Single from "./pages/Single";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import Projects from "./pages/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "./actions/projects";
import ProjectForm from "./pages/forms/ProjectForm";

function App() {

  const projects = useSelector((state) => state.projects);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />


          <Main>
            <Route exact path="/projects">
              <Projects data={projects} />
            </Route>
            <Route exact path="/add-project" component={ProjectForm} />

            <Route exact path="/Single/:postId" component={Single} />
            <Route exact path="/AjoutBlog" component={AjoutBlog} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/Equipe" component={Equipe} />
            <Route exact path="/profile" component={Profile} />

          </Main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
