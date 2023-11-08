import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import {
  Home,
  LandingPage,
  Form,
  Detail,
  NotFound404Page,
  About,
  Login,
  Register,
} from "./views";
import { NavBar, FooterBar } from "./components/bars";
import { loadPokemonInitialValues } from "./handlers/handleInitialValuesLoader";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    loadPokemonInitialValues(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      {location.pathname !== "/" && <FooterBar />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/create" component={Form} />
        <Route path="/update/:id" component={Form} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect exact from="/error404" to="/not-found" />
        <Route component={NotFound404Page} />
      </Switch>
    </div>
  );
}

export default App;
