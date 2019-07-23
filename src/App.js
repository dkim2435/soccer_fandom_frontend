import React, { Component } from 'react';
//Import the routing module,Switch and Route.
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Import Navbar function in the file
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
//Import the TeamDetails function in the file
import TeamDetails from './components/teams/TeamDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddTeam from './components/teams/AddTeam'


class App extends Component {
  render() {
    return (
      //other components must be included in the BrowserRouter component
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/team/:id' component={TeamDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/add' component={AddTeam} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;