import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

function Hello() {
  return <h1>Hello React Router...</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/Hello">To Hello</Link>

        <br />

        <Route path="/Hello" component={Hello} />
      </div>
    );
  }
}

export default App;
