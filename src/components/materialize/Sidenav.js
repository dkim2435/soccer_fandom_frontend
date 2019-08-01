import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../../stylesheets/Sidenav.css'
import image1 from "../../images/HomePage.jpg";
import image2 from "../../images/image2.jpg";
import { connect } from 'react-redux'

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.close();
    // console.log(instance.isOpen);
  }
  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav"
        >
          <li>
            <div className="user-view">
              <div className="background">
                <img src={image2} />
              </div>
              <a href="#user">
                <img className="circle" src={image1} />
              </a>
              <a href="#name">
                <span className="white-text name"></span>
              </a>
              <a href="#email">
                <span className="white-text email">{this.props.user.username}</span>
              </a>
            </div>
          </li>
          <li>
            <a href="/fandoms">
              <i className="material-icons">face</i>My Page
            </a>
          </li>
          <li>
            <a href="/teams">
              <i className="material-icons">dashboard</i>Teams
            </a>
          </li>
          <li>
            <a href="/highlights">
              <i className="material-icons">ondemand_video</i>Highlights
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="waves-effect" href="/schedule">
              <i className="material-icons">today</i>Schedule
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/information">
              <i className="material-icons">people</i>TeamWiki
            </a>
          </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="sidenav-icon small material-icons ">more_vert</i>
        </a>
      </div>
    );
  }
}
let mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Sidenav)
