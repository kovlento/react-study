import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODO_LIST_WITHSAGA } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

function* mySagas(){
  yield takeEvery(GET_TODO_LIST_WITHSAGA,fetchList)
}

function* fetchList(){
  const res = yield axios.get('http://rap2api.taobao.org/app/mock/237602//kovlento/reduxdemo/getlist')
  const action = getListAction(res.data.data.list)
  yield put(action)
}

export default mySagas