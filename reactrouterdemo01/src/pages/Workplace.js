import React from 'react';
import { Route, Link } from 'react-router-dom'
import Money from './workplace/Money'
import GetUp from './workplace/GetUp'

function Workplace(){
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money">职场技能</Link></li>
          <li><Link to="/workplace/getup">职场秘籍</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>职场软技能</h3></div>
        <Route path="/workplace/money/" component={Money} />
        <Route path="/workplace/getup/" component={GetUp} />
      </div>
    </div>
  )
}

export default Workplace