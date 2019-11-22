import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, changeValue, addItem, list } = props
  return ( 
    <div>
          <div><input onChange={changeValue} placeholder="请输入" value={inputValue}/>
          <button onClick={addItem}>提交</button></div>
          <ul>
              {
                list.map((item,index)=>{
                  return (
                    <li key={index}>{item}</li>
                  )
                })
              }
          </ul>
      </div>
    );
}

const stateProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    changeValue(e){
      let action = {
        type: 'changeValue',
        value: e.target.value
      }
      dispatch(action)
    },
    addItem(){
      let action = {
        type: 'addItem'
      }
      dispatch(action)
    },
    deleteItem(index){
      let action = {
        type: 'deleteItem',
        index
      }
      dispatch(action)
    }
  }
}
 
export default connect(stateProps,dispatchToProps)(TodoList);