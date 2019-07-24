//import connect module
import { connect } from 'react-redux'
import React, { Component } from 'react';
import TeamList from '../teams/TeamList'

class TeamsContainer extends Component {

  render() {
    //let's use projects object
    const { teams } = this.props;

    return (
      <div className="blue-grey">
        <div className="dashboard container blue-grey">
          <div className="row">
            <div className="col s12 m6"> {/*한 페이지에 총 12개의 그리드 중 6개를 사용 */}
              {/* TeamList Component here */}
              <TeamList teams={teams} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

//function that gets data from store
const mapStateToProps = (state) => {
  return {
    teams: state.team.teams

  }
}


export default connect(mapStateToProps)(TeamsContainer)