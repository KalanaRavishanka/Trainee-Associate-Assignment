import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Welcome from './pages/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
