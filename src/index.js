import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import FirstSample from './components/firstSample';
import FormSample from './components/formSample';
import AjaxSample from './components/ajaxSample';
import ParentToChild from './components/parentToChild';
import ChildToParent from './components/childToParent';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <App />
    <ChildToParent />
    <ParentToChild />
    <FirstSample/>
    <FormSample/>
    <AjaxSample />
    </div>
  </Provider>
  , document.querySelector('.container'));
