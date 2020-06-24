import React, { Component } from 'react';
import firebase from './components/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landingpage from './components/landingpage';
import './App.css';


class App extends Component {

  state = {
    phone: "",
    redirect: false
  }

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("captcha resolved");
        this.onSignInSubmit();
      }
    });
  }

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.setUpRecaptcha();
    var phoneNumber = this.state.phone;
    console.log(phoneNumber)
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).

        var code = window.prompt("Enter OTP");
        confirmationResult.confirm(code).then(function (result) {
          // User signed in successfully.
          var user = result.user;
          // ...
          console.log("User logged in");
          this.setState({ redirect: true })

        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
        });

        window.confirmationResult = confirmationResult;
      }).catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  }

  handleChange = (e) => {
    this.setState({ phone: e.target.value });
    console.log(this.state.phone)
  }

  redirecttopage = () => {
    if (this.state.redirect)
      return <Redirect to='/landingpage' />;
  }

  render() {
    return (
      <div className="App">
        {this.redirecttopage()}
        <Router>
          <Switch>
            <Route path='/landingpage'>
              <Landingpage />
            </Route>
          </Switch>


          <form onSubmit={this.onSignInSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.phone} />
            <button id="sign-in-button" type='submit'>
              SignUp
          </button>
          </form>


        </Router>
      </div>
    )
  }
}


export default App;
