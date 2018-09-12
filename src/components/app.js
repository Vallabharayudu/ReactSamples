import React, { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props);
  }
componentDidMount(){

}

  render() {
   // var currentLocation = this.context.location.pathname;
    console.log(this.props.history);
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                    <li><a href="/firstSample">First Sample</a></li>
                    <li><a href="/formSample">Form Sample</a></li>
                    <li><a href="/ajaxSample">Ajax Sample</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Parent Child Relations 
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/parentToChild">parentToChild</a></li>
                            <li><a href="/childToParent">childToParent</a></li>
                        </ul>
                    </li>

                    <li><a href="/objectUpdate">Object Inline Update</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Redux 
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="/reduxSample">Redux Sample Without Action</a></li>
                            <li><a href="/ReduxWithAction">Redux With Action</a></li>
                        </ul>
                    </li>
                    <li><a href="/emp-list">Employess</a></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}
