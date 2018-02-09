import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';


    class MySite extends Component {
        state = {users: []}
      
        /*componentDidMount() {
          fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        }*/

        data = {
            "username": 'haukur',
            "password": 'haukuringi'
         }

        componentDidMount() {
            fetch('/users', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:  JSON.stringify(this.data)
             })
              .then(res => res.json())
              .then(users => this.setState({ users }));
        }
      
        render() {
          return (
            <div className="App">
            <Navbar />
              <h1>Velkominn á þína síða</h1>
              {this.state.users.map(user =>
                <div key={user.password}>{user.username}</div>
              )}
            </div>
          );
        }
      }

export default MySite