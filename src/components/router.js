import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FirstSample from './firstSample';
import FormSample from './formSample';
import AjaxSample from './ajaxSample';
import ParentToChild from './parentToChild';
import ChildToParent from './childToParent';
import ObjectInlineUpdate from './objectUpdate';

export default class Routers extends Component{

	render() {
      return (
         <Router>
            <div>
               <h2>Routes Content</h2>
               <hr/>
               <Switch>
                  <Route exact path='/firstSample' component={FirstSample}/>
                  <Route exact path='/formSample' component={FormSample}/>
                  <Route exact path='/ajaxSample' component={AjaxSample}/>
                  <Route exact path='/parentToChild' component={ParentToChild}/>
                  <Route exact path='/childToParent' component={ChildToParent}/>
                  <Route exact path='/objectUpdate' component={ObjectInlineUpdate}/>
               </Switch>
            </div>
         </Router>
      );
   }
}