import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppListCards from './AppListCards';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppListCards />
      </MuiThemeProvider>
    );
  }
}

export default App;
