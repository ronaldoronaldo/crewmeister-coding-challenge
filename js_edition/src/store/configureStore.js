import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import absences from './absences'

function configureStore(preloadedState) {
  const rootReducer = combineReducers({
    absences,
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