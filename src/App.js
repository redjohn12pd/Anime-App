import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cards from './components/Cards';
import Nav from './components/Nav';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Home from './components/Home';
function App() {
  return (
<React.Fragment>
<Nav/>
<Switch>
<Route exact path="/">
<Home/>
</Route>
<Route exact path="/Animes">
<Cards title ={"Results"}/>
</Route>
<Route exact path="/Anime/:id">
<Details/>
</Route>
<Route exact path="/Favorites">
  <Favorites/>
</Route>
</Switch>
</React.Fragment>
  );
}
export default App;
