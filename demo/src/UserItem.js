import React, { Component } from 'react';
import PropTypes from 'prop-types'

class UserItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps,nextstate){
    // if(nextProps.content !== this.props.content){
    //   return true
    // }else{
    //   return false
    // }
    return nextProps.content !== this.props.content
  }

  render() { 
    console.log('child-render')
    return ( 
      <li onClick={this.handleClick} >{this.props.name}的{this.props.title}</li>
    );
  }

  handleClick(){
    this.props.deleteItem(this.props.index)
  }
}

UserItem.propTypes={
  title: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

UserItem.defaultProps={
  name: '科比'
}
 
export default UserItem;