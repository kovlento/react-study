import React, { Component } from 'react'

class App extends Component{
  render(){
    return (
      <div>
        <ul className="basketball-ul">
          <li>{false?'Kobe':'科比'}</li>
          <li>James</li>
        </ul>
      </div>
    )
  }
}

export default App