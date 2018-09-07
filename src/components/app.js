import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h3>Route List</h3>
      	<ul>
          <li><a href="/firstSample">firstSample</a></li>
          <li><a href="/formSample">formSample</a></li>
          <li><a href="/ajaxSample">ajaxSample</a></li>
          <li><a href="/parentToChild">parentToChild</a></li>
          <li><a href="/childToParent">childToParent</a></li>
          <li><a href="/objectUpdate">objectInlineUpdate</a></li>
          <li><a href="/reduxSample">Redux Sample Without Action</a></li>
          <li><a href="/ReduxWithAction">Redux With Action</a></li>
       	</ul>
      </div>
    );
  }
}
