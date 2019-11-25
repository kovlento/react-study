import React, { Component } from 'react';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <h2>我是List页，传过来的ID是{this.state.id}</h2>
    );
  }
  componentDidMount(){
    let listId = this.props.match.params.id
    this.setState({id: listId})
  }
}
 
export default List;