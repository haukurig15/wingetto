import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';



    class MySite extends Component {
        state = {users: []}
        

        //sækja query parameter user id
      
        componentDidMount() {
          fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        }
        
      
        render() {
          return (
            <div className="App">
            <Navbar />
              <h1>Velkominn á þína síða</h1>
            </div>
          );
        }
      }

export default MySite