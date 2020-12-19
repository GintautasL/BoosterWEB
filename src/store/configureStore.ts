import { Store, createStore, applyMiddleware, DeepPartial } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga, ApplicationState } from '.'

export default function configureStore(
  initialState: DeepPartial<ApplicationState>,
): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)

  return store
}
