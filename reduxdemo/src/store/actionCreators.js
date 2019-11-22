import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_TODO_LIST_WITHSAGA } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = ()=>({
  type: ADD_ITEM,
})

export const deleteItemAction = (index)=>({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data)=>({
  type: GET_LIST,
  data
})

export const getTodoListWithThunk = ()=>{
  return (dispatch)=>{
    axios.get('http://rap2api.taobao.org/app/mock/237602//kovlento/reduxdemo/getlist')
    .then((res)=>{
      const action = getListAction(res.data.data.list)
      dispatch(action)
    })
  }
}

export const getTodoListWithSaga = ()=>({
  type: GET_TODO_LIST_WITHSAGA,
})