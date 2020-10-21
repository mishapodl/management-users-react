import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { helloSaga } from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga);

export default store;
