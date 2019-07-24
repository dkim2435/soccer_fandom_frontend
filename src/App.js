import React, { Component } from 'react';
//Import the routing module,Switch and Route.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Import Navbar function in the file
import Navbar from './components/Navbar/Navbar';
//Import the TeamDetails function in the file
import TeamDetails from './components/teams/TeamDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
// import './App.css';
import Parallax from "./components/materialize/Parallex";
import TeamCard from './components/teams/TeamCard';
import TeamsContainer from './components/containers/TeamsContainer';


class App extends Component {

  render() {
    return (
      //other components must be included in the BrowserRouter component
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Parallax />
            <Switch>
              <Route exact path='/myteam' component={TeamsContainer} />
              <Route path='/team/:id' component={TeamDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/add' component={TeamCard} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>


    );
  }
}

export default App;