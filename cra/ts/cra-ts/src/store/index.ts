import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { documentReducer } from './document/reducers'
import { sessionReducer } from './session/reducers'
import { userReducers } from './user/reducers'

const rootReducer = combineReducers({
  document: documentReducer,
  session: sessionReducer,
  user: userReducers
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore () {
  const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  )

  return store
}
