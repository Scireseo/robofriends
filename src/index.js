import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import './index.css';
import { searchRobots, setCount, requestRobots } from './reducers';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, setCount, requestRobots });

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();