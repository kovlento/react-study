import React, { Component, Fragment } from 'react'
import './style.css'
import UserItem from './UserItem'
import Toggole from './Toggole'
import axios from 'axios'
import { TransitionGroup,CSSTransition } from 'react-transition-group'

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list:['身高','扣篮','弹跳']
    }
  }

  componentDidMount(){
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
    return (
      <Fragment>
        <div>
          <label htmlFor="put">添加：</label>
          <input id="put" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} type="text"/>
          <button onClick={this.add.bind(this)}>增加属性</button>
        </div>
        <ul>
          <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
              return (
                <CSSTransition
                timeout={2000}
                classNames="toggole-text"
                unmountOnExit
                key={index}
                appear={true}
              >
                <div key={index}>

                    <UserItem title={item} index={index} deleteItem={this.deleteItem.bind(this)}/>
                  
                </div>
                </CSSTransition>
              )
            })
          }
          </TransitionGroup>
        </ul>
        <Toggole />
      </Fragment>
    )
  }

  inputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  add(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default Users