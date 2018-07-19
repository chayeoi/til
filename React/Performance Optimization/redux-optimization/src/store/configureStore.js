import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware()),
  )

  return store
}

export default configureStore

