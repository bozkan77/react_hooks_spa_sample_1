import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// stylesheet
import "bootstrap/dist/css/bootstrap.min.css"

//custom components
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";
import EditScreen from "./screens/EditScreen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <>
          <Switch>
            <Route path="/add" component={AddScreen}></Route>
            <Route path="/edit/:id" component={EditScreen}></Route>
            <Route path="/" component={HomeScreen}></Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
