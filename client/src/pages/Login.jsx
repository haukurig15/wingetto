import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', 
                      password: ''};
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeName(event) {
        this.setState({username: event.target.value});
      }
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        const checkUser = {
            username: this.state.username,
            password: this.state.password
        }

        //kalla á server með checkUser


        //const name = this.state.username;
        //const password = this.state.password;
        console.log(checkUser.username);
        console.log(checkUser.password);
        this.props.history.push('/MySite');
        event.preventDefault();
      }
    


  render() {

    return (
        <div>
        <Navbar />
        <div className="container">
          <h2>Innskráning</h2>
          <div className="col-md-6 col-md-offset-2 whitecontainer">
        
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label className="col-sm-3 control-label ng-scope">Notandanafn</label>

                <div className="col-sm-9">
                <input value={this.state.username} onChange={this.handleChangeName} id="username"  name="username" placeholder="Notandanafn" type="text" ng-model="username" className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" autoFocus="" required=""/>                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-3 control-label ng-scope">Lykilorð</label>

                <div className="col-sm-9">
                    <input value={this.state.password} onChange={this.handleChangePassword} id="password" name="password" ng-model="password" placeholder="Lykilorð" type="password" className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" required=""/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-9 col-sm-offset-3">
                    

                <input type="submit" value="Submit" />
                    

                    
                </div>
            </div>
        </form>
    </div>


        </div>
      </div>
    );
  }
}

export default Login;