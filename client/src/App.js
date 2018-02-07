import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login.jsx';
import MySite from './pages/MySite.jsx';

class App extends Component {
  /*state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}*/

render() {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={Login}/>;
        <Route exact path="/MySite" component={MySite}/>;
      </div>
    </Router>

  );
}
}

export default App;