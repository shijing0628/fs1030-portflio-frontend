import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { sessionService } from 'redux-react-session';

const initialState = {};
const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

sessionService.initSessionService(store, {
 driver: "COOKIES"
})
 .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
 .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));

export default store;