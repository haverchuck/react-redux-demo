import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import MultiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Nav from './components/nav';
import Main from './components/main';
import Accounts from './components/accounts';
import Users from './components/users';
import OrgCharts from './components/org-charts';
import './App.css';

class App extends Component {
  render() {
    return (
      <MultiThemeProvider>
        <div className="App">
            <Nav className="nav-menu" />
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/accounts' component={Accounts}/>
            <Route exact path='/users' component={Users}/>
            <Route exact path='/org-charts' component={OrgCharts}/>
          </Switch>
        </div>
      </MultiThemeProvider>
    );
  }
}

export default App;
