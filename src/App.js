import React, { Component } from 'react';
//Import the routing module,Switch and Route.
import { Switch, Route, Redirect } from 'react-router-dom';
//Import Navbar function in the file
import Navbar from './components/Navbar/Navbar';
//Import the TeamDetails function in the file
// import TeamDetails from './components/teams/TeamDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Parallax from "./components/materialize/Parallex";
// import TeamCard from './components/teams/TeamCard';
import TeamsContainer from './components/containers/TeamsContainer';
import { fetchTeams } from '../src/store/actions/teamActions'
import { fetchUserData } from '../src/store/actions/fandomActions'
import { fetchHighlights } from '../src/store/actions/highlightActions'
import { connect } from 'react-redux';
import Fandomscontainer from './components/containers/FandomsContainer';
import './App.css';
import HighlightsContainer from './components/containers/HighlightsContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchTeams()

    if (localStorage.token)
      this.props.fetchUserData()

    this.props.fetchHighlights()
  }

  render() {
    return (
      //other components must be included in the BrowserRouter component
      <div className="App">
        <Navbar />

        <Switch>
          <Route path='/teams' component={TeamsContainer} />
          <Route path='/highlights' component={HighlightsContainer} />

          <Route path='/fandoms' render={() => this.props.loggedIn ? <Fandomscontainer /> : <Redirect to='/signin' />} />

          {/* <Route path='/team/:id' component={TeamDetails} /> */}
          <Route path='/signin' render={() => this.props.loggedIn ? <Redirect to='/fandoms' /> : <SignIn />} />
          <Route path='/signup' render={() => this.props.loggedIn ? <Redirect to='/fandoms' /> : <SignUp />} />

          <Route path='/' component={Parallax} />
        </Switch>

      </div>
    );
  }
}

let mapStateToProps = state => ({ loggedIn: state.auth.loggedIn })

export default connect(mapStateToProps, { fetchTeams, fetchUserData, fetchHighlights })(App)
