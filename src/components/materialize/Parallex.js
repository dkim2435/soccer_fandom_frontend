import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Image1 from "/Users/Evan/Desktop/project/soccer_fandom_frontend/src/images/image2.jpg";
import Image2 from "/Users/Evan/Desktop/project/soccer_fandom_frontend/src/images/HomePage.jpg"

class Parallax extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
    M.Parallax.init(this.Parallax2);
  }

  render() {
    return (
      <div>
        <div className="parallax-container">
          <div
            ref={Parallax => {
              this.Parallax1 = Parallax;
            }}
            className="parallax"
          >
            <img src={Image2} />
          </div>
        </div>
        <div className="section blue-grey">
          <div className="row container">
            <h2 className="header white-text">Welcome to Soccer Fandom</h2>
            <p className="white-text"> {/* grey-text text-darken-3 lighten-3 */}
              To use this website, click Sign In or Sign Up
            </p>
          </div>
        </div>
        <div
          ref={Parallax => {
            this.Parallax2 = Parallax;
          }}
          className="parallax-container"
        >
          <div className="parallax">
            <img src={Image1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
