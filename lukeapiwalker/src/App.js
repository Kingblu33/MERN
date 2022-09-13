import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Form from "./components/Search";
import Details from "./components/Results";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <h1>LukeAPIWalker</h1>

        <Form />

        <Switch>
          <Route exact path="/:category/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
