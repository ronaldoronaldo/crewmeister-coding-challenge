import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import members from './members'

function configureStore(preloadedState) {
  const rootReducer = combineReducers({
    members,
  })
  
  const store = createStore(
    rootReducer, 
    preloadedState, 
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  return store
}

export default configureStore