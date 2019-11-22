import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware(); 
// import thunk from 'redux-thunk'
//使用thunk中间件
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore( reducer, enhancer )

//使用saga中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore( reducer, enhancer )
sagaMiddleware.run(mySagas)

export default store