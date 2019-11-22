import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Toggole extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render() { 
    return ( 
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="toggole-text"
        >
          <h1>hello world</h1>
        </CSSTransition>
        <button onClick={this.toToggole}>点击</button>
      </div>
     );
  }

  toToggole(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Toggole;