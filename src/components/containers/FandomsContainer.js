import React from 'react'
import {Link} from 'react-router-dom'

const Fandomscontainer = () => {
  return (

    <div>
      <div>NO FANDOMS YET</div>
      <a class="waves-effect waves-light btn">
        <Link to={`/teams`} className="white-text">add</Link>
      </a>
    </div>
  )
}

export default Fandomscontainer