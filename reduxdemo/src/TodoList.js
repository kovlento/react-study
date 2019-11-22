import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getTodoListWithThunk, getTodoListWithSaga } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeValue = this.changeValue.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      < TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeValue={this.changeValue}
        handleAdd={this.handleAdd}
        deleteItem={this.deleteItem}
        
      />
    );
  }

  componentDidMount(){
    //使用thunk中间件
    // const action = getTodoListWithThunk()
    // store.dispatch(action)
    //使用saga中间件
    const action = getTodoListWithSaga()
    store.dispatch(action)
  }

  changeValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  handleAdd(){
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index){
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  storeChange(){
    this.setState(store.getState())
  }
}
 
export default TodoList;