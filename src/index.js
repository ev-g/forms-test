require('normalize.css');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';

// Redux utility functions
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './App';

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
 )(createStore);
const store = finalCreateStore(reducer);

ReactDOM.render(
  <Provider store={store} key="provider">
    <div>
      <App />
      <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>
  </Provider>,
   document.getElementById('root'));
