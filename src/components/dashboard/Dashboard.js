import React, { Component } from 'react';
import Notifications from './Notifications';
import TeamList from '../teams/TeamList'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"> {/*한 페이지에 총 12개의 그리드 중 6개를 사용 */}
            {/* TeamList Component here */}
            <TeamList />
          </div>
          <div className="col s12 m5 offset-m1">{/*나머지 6개중 5개를 쓰고 하나는 쉬프트 */}
            {/* Notifications Component here */}
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard