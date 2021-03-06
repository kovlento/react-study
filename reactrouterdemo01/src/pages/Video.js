import React from 'react';
import { Route, Link } from 'react-router-dom'
import Ng from './video/Ng'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

function Video(){
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/ng">Ng教程</Link></li>
          <li><Link to="/video/vue">Vue教程</Link></li>
          <li><Link to="/video/flutter">Flutter教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/video/ng/" component={Ng} />
        <Route path="/video/vue/" component={Vue} />
        <Route path="/video/flutter/" component={Flutter}/>
      </div>
    </div>
  )
}

export default Video