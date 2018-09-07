import React, { Component } from 'react';


export default class App extends Component {
componentDidMount(){

}

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                    <li><a href="/firstSample">firstSample</a></li>
                    <li><a href="/formSample">formSample</a></li>
                    <li><a href="/ajaxSample">ajaxSample</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Parent Child Relations 
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/parentToChild">parentToChild</a></li>
                            <li><a href="/childToParent">childToParent</a></li>
                        </ul>
                    </li>

                    <li><a href="/objectUpdate">objectInlineUpdate</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Redux 
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/reduxSample">Redux Sample Without Action</a></li>
                            <li><a href="/ReduxWithAction">Redux With Action</a></li>
                        </ul>
                    </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}
