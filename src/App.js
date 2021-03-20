import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Dashboard from "./pages/Dashboard";
import ProjectOne from "./components/ProjectOne/ProjectOne";
import Skills from "./pages/Skills";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import storage from "local-storage-fallback";
import SocialFollow from "./components/SocialFollow/SocialFollow";
import ReactNotification from "react-notifications-component";
import Portfolio from "./components/admin/portfolio/Portfolio";
import PortfolioAdd from "./components/admin/portfolio/PortfolioAdd";
import PortfolioUpdate from "./components/admin/portfolio/PortfolioUpdate";
import Resume from "./components/admin/resume/Resume";
import ResumeAdd from "./components/admin/resume/ResumeAdd";
import ResumeUpdate from "./components/admin/resume/ResumeUpdate";

const GlobalStyle = createGlobalStyle`
body {
  background-color:${(props) =>
    props.theme.mode === "dark" ? "#222" : "#eee"};
    color:${(props) => (props.theme.mode === "dark" ? "#eee" : "#222")};
}
`;

function getInitialTheme() {
  const saveTheme = storage.getItem("theme");
  return saveTheme ? JSON.parse(saveTheme) : { mode: "light" };
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <ReactNotification />
      <GlobalStyle />
      <Router className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/about/projectOne" exact component={ProjectOne}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/auth" component={Login}></Route>
          <Route path="/users" component={SignUp}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/admin/portfolio" exact component={Portfolio}></Route>
          <Route
            path="/admin/portfolio/create"
            exact
            component={PortfolioAdd}
          ></Route>
          <Route
            path="/admin/portfolio/update/:id"
            exact
            component={PortfolioUpdate}
          ></Route>
          <Route path="/admin/api/resume" exact component={Resume}></Route>
          <Route
            path="/admin/api/resume/create"
            exact
            component={ResumeAdd}
          ></Route>
          <Route
            path="/admin/api/resume/update/:id"
            exact
            component={ResumeUpdate}
          ></Route>
        </Switch>
      </Router>
      <footer className="custmized-footer">
        <SocialFollow />
        <button
          className="theme-btn"
          onClick={(e) =>
            setTheme(
              theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
            )
          }
        >
          Set theme color
        </button>
      </footer>
    </ThemeProvider>
  );
}

export default App;
