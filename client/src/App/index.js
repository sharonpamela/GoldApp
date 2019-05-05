import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import WalletBar from './WalletBar';
import {AppProvider} from './AppProvider';
import {AppContext} from "../App/AppProvider";
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Content from '../Shared/Content';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
        <AppContext.Consumer>
          {({page}) => (
          page === 'landing' ?
          null:
          <AppBar/>
          )}
        </AppContext.Consumer>
          <Content>
            <Settings />
            <Dashboard />
            </Content>
          <WalletBar/>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
