import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        {aid:123,title:'我是科比'},
        {aid:456,title:'我是詹姆斯'},
        {aid:789,title:'我是乔丹'},
      ]
    }
    this.props.history.push('home')   //函数式重定向 
  }
  render() { 
    return (
      <div>
        <Redirect to="/home/" />
        <h2>我是首页</h2>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <li key={index}>
                  <Link to={'/list/'+item.aid}> {item.title} </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      
    );
  }
}
 
export default Index;