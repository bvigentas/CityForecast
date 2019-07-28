import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

class App extends Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <div id="main">
            <Container maxWidth="sm">
              {this.props.children}
            </Container>
          </div>
        </header>
      </div>
    );
  };
}

export default App;
