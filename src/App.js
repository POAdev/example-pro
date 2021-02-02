import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import IdeasList from "./IdeasList"
import MetaDataCall from "./MetaDataCall";
import Weather from "./Weather"
import Menu from "./components/Menu"

function App() {

  return (
    <Router>
      <div className="container-fluid">
    
        <Menu />
        <Switch>
          <Route path="/IdeasList">
            <IdeasList />
          </Route>
          <Route path="/MetaDataCall">
            <MetaDataCall />
          </Route>
          <Route path="/Weather">
            <Weather />
          </Route>
          <Route path="/">
            Home page
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
