import React, { Component } from 'react';
import Ajax from './ajax';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter
      	<Ajax />
      </div>
    );
  }
}
