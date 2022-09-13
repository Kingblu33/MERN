import './App.css';
npm i
import Main from './views/Main';
import { Switch, Route, Link } from "react-router-dom"
import Create from './views/Create';


function App() {
  return (
    <div className="App">
      <div className="w-25 d-flex justify-content-center mx-auto">
        <Link className="btn btn-success m-3" to="/">Menu</Link>
        <Link className="btn btn-info m-3" to="/create">Create Sundae</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
